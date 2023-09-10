import styled from "styled-components";
import {AiOutlineArrowLeft} from "react-icons/ai";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CloseBtn = styled.div`
    font-size: 30px;
    padding : 15px;
    &:hover {
        cursor: pointer;
    }
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
  padding-left: 20px;
`;

const H1 = styled.h1`
  font-size: 20px;
  
  &:hover {
    cursor: pointer;
  }
`;

const H2 = styled.h2`

`;



const MenuContent = ({closeHandler}) => {
    return (
        <Wrapper>
            <CloseBtn onClick={closeHandler}>
                <AiOutlineArrowLeft onClick={closeHandler}/>

            </CloseBtn>
            <ContentWrapper>
                <H1 onClick={()=> {
                    window.location.href = "https://sbslc.notion.site/My-New-Tab-7fad461628cd440b99bc803cfb56d8d0?pvs=4";
                }}>사용 방법</H1>
            </ContentWrapper>
        </Wrapper>
    );
}

export default MenuContent;