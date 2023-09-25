import styled from "styled-components";
import MemoBoard from "../components/memo/MemoBoard";
import {useEffect, useState} from "react";
import AddMemoModal from "../components/memo/AddMemoModal";
import {useDispatch, useSelector} from "react-redux";
import memoSlice, {addMemo, memoActions} from "../store/memo/Memo.slice";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  flex-grow: 1;
  flex-shrink: 0;
`;

const MemoHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
`;

const MemoAddBtn = styled.button`
  background-color: ${({theme}) => theme.linkElementColor}
  padding: 10px;
  border-radius: 5px;
  margin-right: 20px;
`;

const MEMOS = [
  {
    id: 1,
    title: "새로운 기능, 메모",
    content: "메모를 사용해보세요",
    top: 100,
    left: 100,
    bgColor: "lightyellow",
  },
]
const MemoPage = () => {
  const dispatch = useDispatch();
  const memos = useSelector(state => state.memo.memos);
  console.log(memos);
  const [isOpen, setIsOpen] = useState(false);

  const closeHandler = () => {
    setIsOpen(false);
  }
  useEffect(() => {
    const memos = localStorage.getItem("memos");
    if (memos) {
      dispatch(memoActions.setMemos(JSON.parse(memos)));

    } else {
      dispatch(memoActions.setMemos(MEMOS));
    }
  }, []);

  return (
    <Wrapper>
      <MemoHeader>
        <MemoAddBtn onClick={
          () => {
            setIsOpen(true);
          }
        }>
          Add a Memo...
        </MemoAddBtn>
        <AddMemoModal isOpen={isOpen} close={closeHandler}/>
      </MemoHeader>
      <MemoBoard memos={memos} />
    </Wrapper>
  );
}

export default MemoPage;