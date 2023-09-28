import SearchInput from "../components/link/SearchInput";
import styled from "styled-components";
import LinkList from "../components/link/LinkList";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  flex-grow: 1;
  padding-top: 90px;
  
  flex-shrink : 0;
`;

const MainPage = ({leftHandler, rightHandler}) => {

    return (
        <Wrapper>
            <SearchInput></SearchInput>
            <LinkList/>
        </Wrapper>
    );
}

export default MainPage;