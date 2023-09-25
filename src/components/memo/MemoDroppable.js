import {useDroppable} from "@dnd-kit/core";

import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
`;
const MemoDroppable = (props) => {
  const {setNodeRef} = useDroppable({
    id: "memo-droppable"
  });



  return (
    <Wrapper ref={setNodeRef}>
      {props.children}
    </Wrapper>
  );
}

export default MemoDroppable;