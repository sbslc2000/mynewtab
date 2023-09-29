import styled from "styled-components";
import {useEffect} from "react";
import {AiOutlineSetting} from "react-icons/ai";
import MenuContent from "./MenuContent";

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  height: ${props => props.isOpen ? "100%;" : "60px;"};
  z-index: 1;
  
  width: ${props => props.isOpen ? "100%;" : undefined};
`;

const Menu = styled.div`
  width: ${props => props.isOpen ? "340px" : "0px"};
  height: ${props => props.isOpen ? "100%" : "0px"};
  background-color: ${({theme}) => theme.bgColor};
  transition: 0.3s;
  flex-shrink: 0;
  z-index: 30;
`;

const SettingBtnStyle = styled.div`
  font-size: 30px;
  padding : 15px;
  height: 60px;

  &:hover {
    cursor: pointer;
  }
`;

const Hider = styled.div`
  width: ${props => props.isOpen ? "100%;" : "0px"};
  height: ${props => props.isOpen ? "100%" : "0px"};
  background-color: black;
  opacity: 0.5;
`;


const Sidebar = ({isMenuOpen,setIsMenuOpen}) => {

    useEffect(() => {
        const handleClose = (event) => {
            if ((event.key === 'Escape') && isMenuOpen) {
                event.preventDefault();
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('keydown', handleClose);

        // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거
        return () => {
            document.removeEventListener('keydown', handleClose);
        };
    }, [isMenuOpen, setIsMenuOpen]);

    const closeMenuBar = () => {
        setIsMenuOpen(false);
    }

    return (
        <Wrapper isOpen={isMenuOpen}>
            <Menu isOpen={isMenuOpen}>
                {isMenuOpen && (
                    <MenuContent closeHandler={closeMenuBar}></MenuContent>
                )}
            </Menu>
            <Hider
                onClick={closeMenuBar}
                isOpen={isMenuOpen}>

            </Hider>
            {!isMenuOpen &&
                <SettingBtnStyle onClick={()=>{setIsMenuOpen(true)}}>
                    <AiOutlineSetting />
                </SettingBtnStyle>
             }


        </Wrapper>

    );
}

export default Sidebar;