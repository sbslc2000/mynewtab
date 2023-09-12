import Header from "../components/Header";
import SearchInput from "../components/SearchInput";
import styled from "styled-components";
import LinkList from "../components/LinkList";
import PageNavigator from "../components/PageNavigator";
import {useEffect, useState} from "react";
import Sidebar from "../components/sidebar/Sidebar";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  
  flex-shrink : 0;
`;

const MainPage = ({leftHandler, rightHandler}) => {

    return (
        <Wrapper>
            <PageNavigator
                onLeftClickHandler={leftHandler}
                onRightClickHandler={rightHandler}/>
            <Header />
            <Sidebar></Sidebar>
            <SearchInput></SearchInput>
            <LinkList/>
        </Wrapper>
    );
}

export default MainPage;