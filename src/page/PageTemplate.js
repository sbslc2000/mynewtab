import Header from "../components/Header";
import Sidebar from "../components/sidebar/Sidebar";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const PageTemplate = (props) => {
  return (
        <Wrapper >
          <Header/>
          <Sidebar isMenuOpen={props.isMenuOpen} setIsMenuOpen={props.setIsMenuOpen}></Sidebar>
            {props.children}
        </Wrapper>
    );
}

export default PageTemplate;