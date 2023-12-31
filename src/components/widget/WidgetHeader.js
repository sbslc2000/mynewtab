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
`;

const style = {
  fontSize: 20,
  marginLeft: 10,
  color: "#F04244",
  cursor: "pointer"
}


const WidgetHeader = () => {

  const YoutubeState = useContext(YoutubeContext);

  const onDeleteHandler = (event) => {
    event.stopPropagation();
    console.log("close");
    YoutubeState.setIsPlaying(false);
  }
  return (
    <Wrapper>
      <AiFillCloseCircle
        style={style}
        onClick={onDeleteHandler}
      />
    </Wrapper>
  );
}

export default WidgetHeader;