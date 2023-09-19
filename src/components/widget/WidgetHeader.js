import styled from "styled-components";
import {AiFillCloseCircle} from "react-icons/ai";
import {useContext} from "react";
import {YoutubeContext} from "../../context/YoutubeProvider";

const Wrapper = styled.div`
  height: 30px;
  background: ${({theme}) => theme.linkHover};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  z-index: 100;
`;

const style = {
    fontSize: 20,
    marginLeft:10,
    zIndex: 100,
    color: "#DF6058",
}



const WidgetHeader = () => {

    const YoutubeState = useContext(YoutubeContext);
    return (
        <Wrapper>
            <AiFillCloseCircle  style={style}
                               onClick={
                                   (event) => {
                                       event.stopPropagation();
                                       console.log("close");
                                       YoutubeState.setIsPlaying(false);
                                   }
                               }/>
        </Wrapper>
    );
}

export default WidgetHeader;