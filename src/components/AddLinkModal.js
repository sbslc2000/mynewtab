import styled from "styled-components";
import {useEffect, useState} from "react";

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

const ModalClose = styled.button`
  float: right;
  cursor: pointer;
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
  background-color: #404245;
  border-radius: 7px;
  
  ${props => props.cancel ? "background-color: inherit;border: 1px solid #606368;" : ""}
  background-color: ${props => props.addable ? "#96B3F5" : "inherit"};
  
`;

const Label = styled.label`
  font-size: 12px;
  margin-bottom: 5px;
`;

const AddLinkModal = ({isOpen, close, addLink}) => {

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

    const [name, setName] = useState("");
    const [url, setUrl] = useState("");

    const onNameChangeHandler = (e) => {
      setName(e.target.value);
    }

    const onLinkChangeHandler = (e) => {
        setUrl(e.target.value);
    }

    if (!isOpen) {
        return null;
    }

    const onSubmitHandler = (e) => {
        e?.preventDefault();

        addLink(name,url);
        setName("");
        setUrl("");
        close();
    }

    return (
        <ModalOverlay onClick={close}>
            <Modal onClick={e => e.stopPropagation()}>
                <ModalContent>
                    <span style={{marginBottom: 10}}>바로가기 추가</span>
                    <Form type="submit" onSubmit={onSubmitHandler}>
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
                            <Button type="button" onClick={close} cancel>취소</Button>
                            <Button
                                type="submit"
                                onClick={() => {
                                    if(name.length > 0 && url.length > 0) {
                                        onSubmitHandler();
                                    }
                                }}
                                addable={name.length > 0 && url.length > 0}
                            >
                                추가
                            </Button>
                        </ButtonList>
                    </Form>


                </ModalContent>
            </Modal>
        </ModalOverlay>
    );
}

export default AddLinkModal;