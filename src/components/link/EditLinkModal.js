import styled from "styled-components";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {linkActions} from "../../store/slices/Link.slice";
import {extractFavicon} from "../../util/FaviconExtractor";
import {filterUrl} from "./LinkList";

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
`;

const Modal = styled.div`
  width: 600px;
  background-color: ${({theme}) => theme.bgColor};
  padding: 20px;
  border-radius: 8px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const ButtonList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const Input = styled.input`
  border-radius: 5px;
  background-color: ${({theme}) => theme.linkHover};
  border-bottom: 2px solid ${({theme}) => theme.bgColor};
  padding: 5px;
  margin-bottom: 5px;
    
  &:focus {
    outline: none;
    border-bottom: 2px solid #96B3F5;
  }
`;

const Button = styled.button`
  padding: 8px;
  margin: 8px;
  width: 70px;
  border-radius: 7px;

  background-color: ${props => props.disabled ?  "inherit": "#96B3F5"};
  ${props => props.isCancel ? "background-color: inherit;border: 1px solid #606368;" : ""}
`;

const Label = styled.label`
  font-size: 12px;
  margin-bottom: 5px;
`;

const EditLinkModal = ({close, link}) => {

    const dispatch = useDispatch();

    const onSubmitHandler = async (e) => {
        e?.preventDefault();

        if(!(name.length > 0) || !(url.length > 0)) {
            return null;
        }

        dispatch(linkActions.updateLink({
            "id": link.id,
            "name": name,
            "url": filterUrl(url),
            "favicon": await extractFavicon(filterUrl(url))
        }));

        close();
    }

    useEffect(() => {
        const handleKeydown = (e) => {
            if (e.key === 'Escape') {
                close();
            }
        }

        window.addEventListener('keydown', handleKeydown);

        return () => {
            window.removeEventListener('keydown', handleKeydown);
        }
    }, []);

    const [name, setName] = useState(link.name);
    const [url, setUrl] = useState(link.url);

    const onNameChangeHandler = (e) => {
      setName(e.target.value);
    }

    const onDeleteHandler = (e) => {
        e.preventDefault();
        dispatch(linkActions.deleteLink(link.id));
        close();
    }

    const onLinkChangeHandler = (e) => {
        setUrl(e.target.value);
    }

    return (
        <ModalOverlay onClick={e => {
            e.stopPropagation();
        }}>
            <Modal >
                <ModalContent >
                    <span style={{marginBottom: 10}}>바로가기 수정</span>
                    <Form onSubmit={onSubmitHandler}>
                        <Label>이름</Label>
                        <Input
                            value={name}
                            type="text"
                            onChange={onNameChangeHandler}
                        />
                        <Label>링크</Label>
                        <Input
                            value={url}
                            type="text"
                            onChange={onLinkChangeHandler}
                        />
                        <ButtonList>
                            <Button style={{border:"1px solid red",color:"red",backgroundColor:"inherit"}}
                                  type="button" onClick={onDeleteHandler} isCancel={true}>삭제</Button>
                            <Button type="button" onClick={close} isCancel={true}>취소</Button>
                            <Button
                                type="submit"
                                onSubmit={onSubmitHandler}
                                disabled={!(name.length > 0 && url.length > 0)} // 조건 수정
                            >
                                변경
                            </Button>
                        </ButtonList>
                    </Form>
                </ModalContent>
            </Modal>
        </ModalOverlay>
    );
}

export default EditLinkModal;