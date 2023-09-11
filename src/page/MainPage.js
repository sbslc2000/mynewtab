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
`;

const MainPage = ({pageNavigateHandler}) => {


    useEffect(() => {
        const handleGoRight = (event) => {
            if (event.metaKey && event.key === '/') {
                event.preventDefault();
                onRightClickHandler();
            }
        };

        document.addEventListener('keydown', handleGoRight);

        // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거
        return () => {
            document.removeEventListener('keydown', handleGoRight);
        };
    }, []);

    const onRightClickHandler = () => {
        pageNavigateHandler("/todo", "right");
    }
    return (
        <Wrapper>
            <PageNavigator
                onRightClickHandler={onRightClickHandler}/>
            <Header />
            <Sidebar>HI</Sidebar>
            <SearchInput></SearchInput>
            <LinkList/>
        </Wrapper>
    );
}

export default MainPage;