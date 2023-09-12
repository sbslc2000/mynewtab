import {IoMdArrowDropleftCircle, IoMdArrowDroprightCircle} from "react-icons/io";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  z-index: 40;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  > div {
    font-size: 25px;
    
    &:hover {
        cursor: pointer;
    }
  }
`;

const PageNavigator = ({onLeftClickHandler, onRightClickHandler}) => {

    return (
        <Wrapper>
            {onLeftClickHandler ?
                <div title={"⌘ + J"}>
                    <IoMdArrowDropleftCircle
                        onClick={onLeftClickHandler}
                    />
                </div> : <div/>}
            {onRightClickHandler ? <div   title={"⌘ + L"}>
                <IoMdArrowDroprightCircle
                    onClick={onRightClickHandler}
                />
            </div>: <div/>}
        </Wrapper>
    );
}

export default PageNavigator;