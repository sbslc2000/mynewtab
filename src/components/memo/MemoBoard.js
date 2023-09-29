import styled from "styled-components";
import Memo from "./Memo";
import Masonry from "react-masonry-css";
import "./Masonry.css";
import {DndContext, PointerSensor, useSensor, useSensors} from "@dnd-kit/core";
import {rectSortingStrategy, SortableContext} from "@dnd-kit/sortable";
import {useDispatch} from "react-redux";
import {memoActions} from "../../store/slices/Memo.slice";
import MemoDroppable from "./MemoDroppable";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const MemoBoard = ({memos}) => {
  const dispatch = useDispatch();

  const sensors = useSensors(
    useSensor(PointerSensor, {
        activationConstraint: {
          distance: 10
        }
      }
    ));

  const handleDragEnd = (event) => {
    console.log(event);
    const id = event.active.id;
    const x = event.delta.x;
    const y = event.delta.y;
    dispatch(memoActions.moveMemoPosition({id, x, y}));
  }


  return (
    <Wrapper id={"MemoBoard"}>
      <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
        <MemoDroppable>
          {memos.map((memo) => {
            return (
              <Memo key={memo.id} title={memo.title}
                    content={memo.content} id={memo.id}
                top={memo.top} left={memo.left} bgColor={memo.bgColor}
              />
            );
          })}
        </MemoDroppable>
      </DndContext>
    </Wrapper>
  );
}

export default MemoBoard;