import PlayListCategory from "./PlayListCategory";
import {useContext} from "react";
import {YoutubeContext} from "../../context/YoutubeProvider";


const PLAYLISTS = {
    "지친 하루": "https://www.youtube.com/embed/DVQOazBqfEU?si=57-V81uctWWn3vKV",
    "코플리": "https://www.youtube.com/embed/0T322TRfes4?si=qZzi2L1c52t-3v3S"
}
const PlayListCategoryList = () => {

    const YoutubeState = useContext(YoutubeContext);

    const onClickHandler = (id) => {
        console.log("here");
        YoutubeState.setUrl(PLAYLISTS[id]);
        YoutubeState.setIsPlaying(true);

    }

    return (
        <div>
            <PlayListCategory title={"범플리 (범석이가 추천하는 플레이리스트)"}
                              onClick={() => {
                                  onClickHandler("지친 하루");
                              }}/>
            <PlayListCategory title={"코플리 (코딩하면서 듣는 음악)"}
                              onClick={() => {
                                    onClickHandler("코플리");
                              }}/>
        </div>
    );
}

export default PlayListCategoryList;