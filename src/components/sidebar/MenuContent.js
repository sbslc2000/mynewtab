import styled from "styled-components";
import {AiOutlineArrowLeft} from "react-icons/ai";
import {FaMoon, FaSun} from "react-icons/fa";
import React from "react";
import {useTheme} from "../../context/ThemeProvider";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 40;
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
  font-size: 23px;
  margin: 20px 0 5px 0;
`;

const H2Link = styled.a`
  font-size: 17px;
  font-weight: 900;
  color: #9ca3af;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
`;

const H2 = styled.h2`
  font-size: 17px;
  margin: 1px 0;
`;





const MenuContent = ({closeHandler}) => {

    return (
        <Wrapper>
            <CloseBtn onClick={closeHandler}>
                <AiOutlineArrowLeft onClick={closeHandler}/>

            </CloseBtn>
            <ContentWrapper>
                <H1>MyNewTab</H1>
                <H2>Version 1.0.1</H2>
                <H1>사용 방법</H1>
                <H2Link href={"https://sbslc.notion.site/My-New-Tab-7fad461628cd440b99bc803cfb56d8d0?pvs=4"}
                >
                    노션 바로가기
                </H2Link>
                <H1>단축키</H1>

                <H2>좌측 페이지로 이동 : ⌘ + Z </H2>
                <H2>우측 페이지로 이동 : ⌘ + / </H2>
                <H2>검색창 커서 이동 : ⌘ + s </H2>
                <H2>테마 변경 : ⌘ + shift + L</H2>
                <H2>바로가기 추가 : ⌘ + b</H2>
                <br/>
                <H2>윈도우 사용자 : ⌘ → Ctrl</H2>
            </ContentWrapper>
        </Wrapper>
    );
}

export default MenuContent;