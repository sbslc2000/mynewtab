import PageNavigator from "../components/PageNavigator";
import styled from "styled-components";
import {useEffect} from "react";
import TodoList from "../components/todo/TodoList";
import Header from "../components/Header";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width:100vw;
  flex-shrink : 0;
`;
const TodoListPage = ({leftHandler, rightHandler}) => {

    return (
        <Wrapper>
            <div style={{fontSize: 40,display:"flex",justifyContent:"center",paddingTop:100}}>
                Coming Soon!
            </div>
        </Wrapper>
    );
}

export default TodoListPage;