import PageNavigator from "../components/PageNavigator";
import styled from "styled-components";
import {useEffect} from "react";
import TodoList from "../components/todo/TodoList";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;
const TodoListPage = ({pageNavigateHandler}) => {

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.metaKey && event.key === 'j') {
                event.preventDefault();
                onLeftClickHandler();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const onLeftClickHandler = () => {
        pageNavigateHandler("/mynewtab/", "left");
    }
    return (
        <Wrapper>
            <PageNavigator onLeftClickHandler={onLeftClickHandler}/>
            <h1>
                TodoList
            </h1>
            <TodoList></TodoList>
        </Wrapper>
    );
}

export default TodoListPage;