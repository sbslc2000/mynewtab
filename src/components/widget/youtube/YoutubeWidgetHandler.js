import {useContext, useEffect, useState} from "react";
import YoutubeWidget from "./YoutubeWidget";
import {YoutubeContext} from "../../../page/PageAssembler";


const YoutubeWidgetHandler = ({x,y,isPlaying, url}) => {

    const YoutubeState = useContext(YoutubeContext);

    useEffect(() => {
        const handleKeydown = (e) => {
            if (e.key === 'Escape') {
                YoutubeState.setIsPlaying(false);
            }
        }

        window.addEventListener('keydown', handleKeydown);

        return () => {
            window.removeEventListener('keydown', handleKeydown);
        }
    }, []);

    return (
        <div>
            {isPlaying && <YoutubeWidget x={x} y={y} src={url}/>}
        </div>
    );
}

export default YoutubeWidgetHandler;