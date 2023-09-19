import React, {useState} from "react";
import YoutubeWidgetHandler from "../components/widget/youtube/YoutubeWidgetHandler";
import {DndContext} from "@dnd-kit/core";
import DroppableWrapper from "../components/widget/DroppableWrapper";

const YoutubeContext = React.createContext();

const YoutubeProvider = (props) => {

  const [youtubeUrl, setYoutubeUrl] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const [widgetX, setWidgetX] = useState(100);
  const [widgetY, setWidgetY] = useState(100);

  const youtubeContextValue = {
    "url": youtubeUrl,
    "setUrl": setYoutubeUrl,
    "isPlaying": isPlaying,
    "setIsPlaying": setIsPlaying,
    "widgetX": widgetX,
    "setWidgetX": setWidgetX,
    "widgetY": widgetY,
    "setWidgetY": setWidgetY
  }

  const handleDragEnd = (result) => {
    const {active, over} = result;
    if (active.id !== over.id) {

      if(result.activatorEvent.offsetX < 30 && result.activatorEvent.offsetY < 30) {
        setIsPlaying(false);
        return;
      }


      const xDiff = result.delta.x;
      const yDiff = result.delta.y;

      const innerWidth = window.innerWidth;
      const innerHeight = window.innerHeight;

      const widgetWidth = 400;
      const widgetHeight = 250;

      let newX = widgetX + xDiff;
      if (newX + widgetWidth > innerWidth) {
        newX = innerWidth - widgetWidth;
      }
      if (newX < 0) {
        newX = 0;
      }

      let newY = widgetY + yDiff;
      if (newY + widgetHeight > innerHeight) {
        newY = innerHeight - widgetHeight;
      }
      if (newY < 0) {
        newY = 0;
      }

      setWidgetX(newX);
      setWidgetY(newY);
    }

  }

  return (
        <YoutubeContext.Provider value = {youtubeContextValue}>
          <DndContext onDragEnd={handleDragEnd}>
            <DroppableWrapper>
          <YoutubeWidgetHandler x={widgetX} y={widgetY} isPlaying={isPlaying} url={youtubeUrl}/>
          {props.children}
            </DroppableWrapper>
          </DndContext>
        </YoutubeContext.Provider>
    );
}

export default YoutubeProvider;
export {YoutubeContext};