import {useDroppable} from "@dnd-kit/core";
import styled from "styled-components";


const Wrapper = styled.div`
  position:relative;
  display: flex;
    flex-direction: column;
  height: 100vh;
`;
const DroppableWrapper = (props) => {

    const {setNodeRef} = useDroppable({
        id: 'droppable-1',
    });


    return (
        <Wrapper  id={"droppableWrapper"} ref={setNodeRef} style={{position:"relative"}}>
            {props.children}
        </Wrapper>
    );
}

export default DroppableWrapper;