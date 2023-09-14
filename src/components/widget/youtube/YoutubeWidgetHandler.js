import {useState} from "react";
import YoutubeWidget from "./YoutubeWidget";

const PLAYLIST = {
    "tired" : "https://www.youtube.com/embed/DVQOazBqfEU?si=57-V81uctWWn3vKV",
}
const YoutubeWidgetHandler = ({x,y}) => {

    const [isPlaying, setIsPlaying] = useState(false);
    const [X, setX] = useState()


    return (
        <div>
            {isPlaying && <YoutubeWidget x={x} y={y} src={PLAYLIST.tired}/>}
        </div>
    );
}

export default YoutubeWidgetHandler;