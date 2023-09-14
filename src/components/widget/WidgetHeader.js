import styled from "styled-components";
import {AiFillCloseCircle} from "react-icons/ai";

const Wrapper = styled.div`
  height: 30px;
  background: ${({theme}) => theme.linkHover};
  display: flex;
    align-items: center;
    justify-content: flex-start;
`;

const WidgetHeader = () => {
    return (
        <Wrapper>
            <AiFillCloseCircle color={"#DF6058"} size={20} style={{marginLeft: '10px'}}/>
        </Wrapper>
    );
}

export default WidgetHeader;