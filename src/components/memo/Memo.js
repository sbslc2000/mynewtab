import DroppableWrapper from "../widget/DroppableWrapper";

import styled from "styled-components";
import {useDraggable} from "@dnd-kit/core";
import {AiOutlineClose} from "react-icons/ai";
import {useDispatch} from "react-redux";
import {memoActions} from "../../store/slices/Memo.slice";

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 20px 15px;
  background-color: ${(props)=> props.bgColor};
  background-image: linear-gradient(white 2%, transparent 2%),
  linear-gradient(90deg, white 2%, ${props => props.bgColor} 2%);
  color: black;
  background-size: 100% 25px, 25px 100%;
  width: 280px;
  word-break: break-all;

  margin: 10px;

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  flex-shrink: 0;

  top: ${({top}) => top}px;
  left: ${({left}) => left}px;

  height: fit-content;

  &:after {

    content: "";
    display: ${({isDragging}) => (isDragging ? 'block' : 'none')};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    z-index: -1;
  }
`;

const CloseTab = styled.div`
  position:absolute;
  left: 255px;
  top: 10px;
  
  &:hover {
    cursor: pointer;
  }
  
`;

const Title = styled.div`
  font-weight: 900;
  margin-bottom: 10px;
`;

const Memo = ({id, title, content, top, left, bgColor}) => {

  const dispatch = useDispatch();

  const {attributes, listeners, setNodeRef, transform, transition} = useDraggable({
    id: id
  })


  const isDragging = !!transform;

  const adjustedX = isDragging ? transform.x - 15 : undefined; // 10px만큼 왼쪽으로
  const adjustedY = isDragging ? transform.y - 15 : undefined; // 10px만큼 위로

  const style = {
    transform: isDragging
      ? `translate3d(${adjustedX}px, ${adjustedY}px, 0)`
      : undefined,
    transition: transition,
  };


  return (
    <Wrapper ref={setNodeRef} style={style} {...attributes} {...listeners}
             top={top}
             left={left}
             isDragging={isDragging}
             className={"slices-item"}
             bgColor={bgColor}
    >
      <CloseTab >
        <AiOutlineClose
          color={"dimgray"}
          onClick={() => {
            dispatch(memoActions.deleteMemo(id));
          }}
        />
      </CloseTab>


      <Title>{title}</Title>
      <span>{content}</span>
    </Wrapper>
  );
}

export default Memo;