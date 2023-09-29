import styled from "styled-components";
import {useEffect, useState} from "react";
import {FiX} from "react-icons/fi";
import {AiOutlineClose} from "react-icons/ai";
import {useDispatch} from "react-redux";
import {memoActions} from "../../store/slices/Memo.slice";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;

  transition: opacity 0.3s ease-in-out; /* 애니메이션 효과 */


`;

const BG_COLORS= [
  "lightyellow",
  "lightblue",
  "lightgreen",
  "lightpink",
];

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * BG_COLORS.length);
  return BG_COLORS[randomIndex];
}

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  min-height: 430px;
  background-color: ${({bgColor}) => bgColor};
  padding: 30px;
  border-radius: 8px;

  transform: scale(0) translate(100%, -100%); /* 초기 상태: 오른쪽 상단 모서리에 숨겨져 있음 */
  transition: transform 0.3s ease-in-out; /* 애니메이션 효과 */

  &.active {
    transform: scale(1) translate(0, 0); /* 활성화: 원래 위치로 이동 */
  }

  &.deactive {
    transform: scale(0) translate(100%, -100%); /* 비활성화: 오른쪽 상단 모서리로 이동 */
  }
`;


const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  flex-grow: 1;
`;

const Input = styled.input`
  display: block;
  background-color: inherit;
  color: black;
  font-size: ${({fontSize}) => fontSize};
  width: 100%;
  margin-bottom: 5px;
  
  &:focus {
    outline: none;
  }
`;

const ContentInput = styled.textarea`
  display: block;
  background-color: inherit;
  color: black;
  width : 100%;
  height : 100%;
  resize: none;
  
  flex-grow: 1;
   
  &:focus {
    outline: none;
  }
  

`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ButtonList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 8px;
  margin: 8px;
  width: 70px;
  //background-color: #404245;
  border-radius: 7px;
  border: 1px solid #606368;
  color: black;
`;

const CloseTab = styled.div`
  display: flex;
  justify-content: flex-end;
  & > svg {
    cursor: pointer;
  }
`;

const AddMemoModal = ({isOpen, close}) => {
  const dispatch = useDispatch();

  const [active, setActive] = useState(false);
  const [deactive, setDeactive] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [bgColor, setBgColor] = useState(getRandomColor());
  useEffect(() => {
    setBgColor(getRandomColor());

    setTimeout(() => {
      if (isOpen) setActive(true);
    }, 0);
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const closeHandler = () => {
    setActive(false);
    setDeactive(true);
    setTitle("");
    setContent("");

    setTimeout(() => {
      close();
      setDeactive(false);
    }, 300);
  }

  const submitHandler = (e) => {
    e.preventDefault();

    const newMemo = {
      id: Date.now(),
      title: title,
      content: content,
      top: window.innerHeight / 2 - 100,
      left: window.innerWidth / 2 - 150,
      bgColor : bgColor
    }

    dispatch(memoActions.addMemo(newMemo));
    closeHandler();
  }


  return (<ModalOverlay>
      <Modal
        bgColor={bgColor}
        className={active ? "active" : ""}
        onClick={e => e.stopPropagation()}>
        <ModalContent>
          <CloseTab style={{display:"flex",justifyContent:"flex-end"}}>
            <AiOutlineClose
              color={"black"}
              onClick={closeHandler}
            />
          </CloseTab>
          <Form onSubmit={submitHandler}>
              <Input
                fontSize={"20px"}
                height={"30px"}
                type="text"
                placeholder="제목을 입력하세요"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <ContentInput
                type="text"
                placeholder="내용을 입력하세요"
                value={content}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
              />
            <ButtonList>
              <Button type="submit">
                추가
              </Button>
            </ButtonList>
          </Form>
        </ModalContent>
      </Modal>
    </ModalOverlay>);
}

export default AddMemoModal;