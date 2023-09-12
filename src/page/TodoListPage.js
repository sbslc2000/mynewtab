import PageNavigator from "../components/PageNavigator";
import styled from "styled-components";
import {useEffect} from "react";
import TodoList from "../components/todo/TodoList";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width:100vw;
  flex-shrink : 0;
`;
const TodoListPage = ({leftHandler, rightHandler}) => {

    return (
        <Wrapper>
            <PageNavigator
                onRightClickHandler={rightHandler}
                onLeftClickHandler={leftHandler}/>
            <h1>
                TodoList
            </h1>
            <TodoList></TodoList>
        </Wrapper>
    );
}

export default TodoListPage;