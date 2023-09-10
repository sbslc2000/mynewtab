import Header from "../components/Header";
import GoogleSearchInput from "../components/GoogleSearchInput";
import styled from "styled-components";
import LinkList from "../components/LinkList";
import PageNavigator from "../components/PageNavigator";
import {useEffect} from "react";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const MainPage = ({pageNavigateHandler}) => {

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.metaKey && event.key === 'l') {
                event.preventDefault();
                onRightClickHandler();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const onRightClickHandler = () => {
        pageNavigateHandler("/mynewtab/todo", "right");
    }
    return (
        <Wrapper>
            <PageNavigator
                onRightClickHandler={onRightClickHandler}/>
            <Header />
            <GoogleSearchInput></GoogleSearchInput>
            <LinkList/>
        </Wrapper>
    );
}

export default MainPage;