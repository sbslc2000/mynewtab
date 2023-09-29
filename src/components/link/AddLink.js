import styled from "styled-components";
import {AiOutlinePlus} from "react-icons/ai";
import {useEffect, useState} from "react";
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
    background-color: ${({theme}) => theme.linkHover};
    cursor: pointer;
    
    & > button {
      opacity: 0.5;
    }
  }
`;

const LinkIcon = styled.div`
  width: 48px;
  background-color: ${({theme}) => theme.linkElementColor}
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
  font-size: 12px;
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

    useEffect(() => {
        const handleAddLink = (event) => {
            if ((event.metaKey && event.key === 'b') || (event.ctrlKey && event.key === 'b')) {
                event.preventDefault();
                onClickHandler(event);
            }
        };

        document.addEventListener('keydown', handleAddLink);

        // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거
        return () => {
            document.removeEventListener('keydown', handleAddLink);
        };
    }, []);

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);


    const onClickHandler = (e) => {
        e.preventDefault();
        openModal();
    }

    return (
        <Wrapper onClick={onClickHandler} title={"⌘ + B"}>
            <LinkIcon>
                <AiOutlinePlus />
            </LinkIcon>

            <LinkName>바로가기 추가</LinkName>
            {isModalOpen && <AddLinkModal addLink={addLink} close={closeModal} /> }
        </Wrapper>
    );
}

export default AddLink;