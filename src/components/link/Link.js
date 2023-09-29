import styled from "styled-components";
import {FiEdit} from "react-icons/fi";
import {useSortable} from "@dnd-kit/sortable";
import {linkActions} from "../../store/slices/Link.slice";
import {useDispatch} from "react-redux";
import {useState} from "react";
import EditLinkModal from "./EditLinkModal";
import {editLinkActions} from "../../store/slices/EditLink.slice";

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
  display: block;
  width: 100%;
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const LinkSettingBtn = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;  // 초기 투명도 설정
  transition: opacity 0.3s ease-in-out;  // 투명도에 대한 transition 설정
  padding: 8px;
`;

const Link = ({link}) => {

    const dispatch = useDispatch();

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({id: link.id});
    const onSettingClickHandler = (event) => {
        event.preventDefault();
        event.stopPropagation();
        console.log("link link:",link);
        dispatch(editLinkActions.openEditModal(link));
        // dispatch(linkActions.deleteLink(link.id));
    }

    const style = {
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
        transition: transition,
        zIndex: attributes["aria-pressed"] ? '999' : undefined, // 드래그 중인 아이템을 위로 띄움
        boxShadow: attributes["aria-pressed"] ? '0px 5px 15px rgba(0, 0, 0, 0.3)' : undefined, // 드래그 중에 그림자 효과
    };

    const onClickHandler = () => {
        window.open(link.url);
    }

    return (
        <Wrapper title={link.name} onClick={onClickHandler} ref={setNodeRef} style={style} {...attributes} {...listeners}>
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