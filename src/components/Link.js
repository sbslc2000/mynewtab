import styled from "styled-components";
import {FiEdit} from "react-icons/fi";

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

const Link = ({link,provided,snapshot,deleteLink}) => {

    const onSettingClickHandler = (event) => {
        event.preventDefault();
        event.stopPropagation();

        deleteLink(link.name,link.url);
    }

    return (
        <Wrapper
            href={link.url}  {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}
        >
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