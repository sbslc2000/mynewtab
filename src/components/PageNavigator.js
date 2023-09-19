import {IoMdArrowDropleftCircle, IoMdArrowDroprightCircle} from "react-icons/io";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 50vh;
  width: 100%;
  height: 0;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 1;
  > div {
    font-size: 25px;
    
    &:hover {
        cursor: pointer;
    }
  }
`;

const PageNavigator = ({onLeftClickHandler, onRightClickHandler, isMenuOpen}) => {

    if(isMenuOpen) return (<div/>);

    return (
        <Wrapper>
            {onLeftClickHandler ?
                <div title={"⌘ + J"} >
                    <IoMdArrowDropleftCircle
                        onClick={onLeftClickHandler}
                    />
                </div> : <div/>}
            {onRightClickHandler ? <div title={"⌘ + L"} >
                <IoMdArrowDroprightCircle
                    onClick={onRightClickHandler}
                />
            </div>: <div/>}
        </Wrapper>
    );
}

export default PageNavigator;