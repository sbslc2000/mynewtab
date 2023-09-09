import Header from "../components/Header";
import GoogleSearchInput from "../components/GoogleSearchInput";
import styled from "styled-components";
import LinkList from "../components/LinkList";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
    align-items: center;
`;

const MainPage = () => {
    return (
        <Wrapper>
            <Header>

            </Header>
            <GoogleSearchInput></GoogleSearchInput>
            <LinkList/>
        </Wrapper>

    );
}

export default MainPage;