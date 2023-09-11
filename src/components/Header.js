import styled from "styled-components";
import {useTheme} from "../context/ThemeProvider";
import {FaMoon, FaSun} from "react-icons/fa";
import React from "react";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 8px;
`;


const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 3px;
  font-size: 15px;

  &:hover {
    cursor: pointer;
  }
`;

const Header = () => {

    const [ ThemeMode, toggleTheme] = useTheme();
    const isDark = ThemeMode === "dark";

    return (
        <Wrapper>
            <HeaderItem onClick={toggleTheme}>
                {isDark ? <FaMoon size={22}/> : <FaSun size={22}/>}
            </HeaderItem>
            <HeaderItem>
                <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"> Gmail</a>
            </HeaderItem>
            <HeaderItem>
                <a href="https://myaccount.google.com/?hl=ko&utm_source=OGB&utm_medium=act">Account</a>

            </HeaderItem>
        </Wrapper>
    );
}

export default Header;