import styled from "styled-components";
import {FiEdit} from "react-icons/fi";
import {AiOutlinePlus} from "react-icons/ai";
import {useState} from "react";
import AddLinkModal from "./AddLinkModal";

const Wrapper = styled.a`
  position: relative;
  
  border-radius: 3px;
  width: 112px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  padding: 20px;

  &:hover {
    background-color: #4A4A4D;
    cursor: pointer;
    
    & > button {
      opacity: 0.5;
    }
  }
`;

const LinkIcon = styled.div`
  width: 48px;
  background-color: #252629;
  height: 48px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Favicon = styled.img`
  width: 24px;
`;

const LinkName = styled.span`
  margin-top: 13px;
  font-size: 13px;
`;

const LinkSettingBtn = styled.button`
  
  
  position: absolute;
  right: 0;
  top: 0;

  opacity: 0;  // 초기 투명도 설정

  transition: opacity 0.3s ease-in-out;  // 투명도에 대한 transition 설정

  padding: 8px;
`;

const AddLink = ({addLink}) => {

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);


    const onClickHandler = (e) => {
        e.preventDefault();
        openModal();
    }

    return (
        <Wrapper onClick={onClickHandler}>
            <LinkIcon>
                <AiOutlinePlus />
            </LinkIcon>

            <LinkName>바로가기 추가</LinkName>
            <AddLinkModal isOpen={isModalOpen} close={closeModal}
                addLink={addLink}
            />
        </Wrapper>
    );
}

export default AddLink;