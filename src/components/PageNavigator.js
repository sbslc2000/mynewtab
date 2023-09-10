import {IoMdArrowDropleftCircle, IoMdArrowDroprightCircle} from "react-icons/io";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  > svg {
    font-size: 25px;
    
    &:hover {
        cursor: pointer;
    }
  }
`;

const PageNavigator = ({onLeftClickHandler, onRightClickHandler}) => {

    return (
        <Wrapper>
            {onLeftClickHandler ? <IoMdArrowDropleftCircle
                onClick={onLeftClickHandler}
            /> : <div/>}
            {onRightClickHandler ? <IoMdArrowDroprightCircle
                onClick={onRightClickHandler}
            /> : <div/>}
        </Wrapper>
    );
}

export default PageNavigator;