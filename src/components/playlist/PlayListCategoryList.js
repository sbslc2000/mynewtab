import PlayListCategory from "./PlayListCategory";
import {useContext} from "react";
import {YoutubeContext} from "../../context/YoutubeProvider";


const PLAYLISTS = [
  {
    "id": 0,
    "title": "범플리 (범석이가 추천하는 플레이리스트)",
    "src": "https://www.youtube.com/embed/DVQOazBqfEU?si=57-V81uctWWn3vKV",
  }, {
    "id": 1,
    "title": "코플리 (코딩하면서 듣는 음악)",
    "src": "https://www.youtube.com/embed/0T322TRfes4?si=JsxkbO_vUWyFu994",
  }, {
    "id": 2,
    "title": "여기가 집이야 스타벅스야",
    "src": "https://www.youtube.com/embed/86gToHFkbiU?si=zUTr0fklHZQAYXA1"
  }, {
    "id": 3,
    "title": "갬성 힙합",
    "src" : "https://www.youtube.com/embed/1pxB6ky6Kb8?si=r73GkZBr5lyOtIu3"
  },
  {
    "id": 4,
    "title": "Ella, Jazz가 뭐라고 생각하시나요?",
    "src": "https://www.youtube.com/embed/0gf1HZP0CSo?si=67BlWd-c60cv4ujd",
  },
  {
    "id": 5,
    "title": "Rock will never die!!",
    "src": "https://www.youtube.com/embed/gt7mXfDcL_E?si=QEEZ-I7DVmz21Hti",
  }


]
const PlayListCategoryList = () => {

  const YoutubeState = useContext(YoutubeContext);

  const onClickHandler = (src) => {
    YoutubeState.setUrl(src);
    YoutubeState.setIsPlaying(true);
  }

  return (
    <div>
      {PLAYLISTS.map((playlist) => {
        return <PlayListCategory
          key={playlist.id}

          title={playlist.title}

          onClick={() => {
            onClickHandler(playlist.src);
          }}
        />
      })}
    </div>
  );
}
export default PlayListCategoryList;