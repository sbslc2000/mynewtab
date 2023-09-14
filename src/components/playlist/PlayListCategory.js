import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  border-radius: 10px;
  margin: 20px;
  width: 400px;
  padding: 15px;
    background-color: ${({theme}) => theme.linkElementColor};
  
  &:hover {
    background-color: ${({theme}) => theme.linkHover};
    cursor: pointer;
  }
`;
const PlayListCategory = ({title}) => {
    return (
        <Wrapper>
            {title}
        </Wrapper>
    );
}

export default PlayListCategory;