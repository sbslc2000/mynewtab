import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 8px;
`;


const HeaderItem = styled.div`
  padding: 10px;
  border-radius: 3px;
  font-size: 15px;

  &:hover {
    background-color: #4A4A4D;
    cursor: pointer;
  }
`;

const Header = () => {
    return (
        <Wrapper>
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