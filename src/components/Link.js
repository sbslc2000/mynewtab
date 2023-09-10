import styled from "styled-components";
import {FiEdit} from "react-icons/fi";
import {useSortable} from "@dnd-kit/sortable";
import {PointerSensor, useSensor, useSensors} from "@dnd-kit/core";

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
  margin-top: 10px;
`;

const LinkSettingBtn = styled.button`
  
  
  position: absolute;
  right: 0;
  top: 0;

  opacity: 0;  // 초기 투명도 설정

  transition: opacity 0.3s ease-in-out;  // 투명도에 대한 transition 설정

  padding: 8px;
`;

const Link = ({id,link,deleteLink}) => {

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({id: id});
    const onSettingClickHandler = (event) => {
        event.preventDefault();
        event.stopPropagation();

        deleteLink(link.id);
    }

    const style = {
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
        transition: transition,
        zIndex: transform ? '999' : undefined, // 드래그 중인 아이템을 위로 띄움
        boxShadow: transform ? '0px 5px 15px rgba(0, 0, 0, 0.3)' : undefined, // 드래그 중에 그림자 효과
    };


    return (
        <Wrapper ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <LinkSettingBtn onClick={onSettingClickHandler}>
                <FiEdit></FiEdit>
            </LinkSettingBtn>
            <LinkIcon>
                <Favicon src={link.favicon} alt=""/>

            </LinkIcon>

            <LinkName>{link.name}</LinkName>
        </Wrapper>
    );
}

export default Link;