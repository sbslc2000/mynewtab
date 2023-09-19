import React, {useEffect, useState} from "react";
import MainPage from "./MainPage";
import TodoListPage from "./TodoListPage";
import styled from "styled-components";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import "./Slide.css";
import PageNavigator from "../components/PageNavigator";
import PlayListPage from "./PlayListPage";
import PageTemplate from "./PageTemplate";

const Wrapper = styled.div`
  //display: flex;
  height: 100%;
`;


const PAGE_LIST = [
  MainPage, PlayListPage, TodoListPage,
];

export const getLeftIndex = (index) => {
  return index - 1 < 0 ? null : index - 1;
}

export const getRightIndex = (index) => {
  return index + 1 >= PAGE_LIST.length ? null : index + 1;
}

const PageAssembler = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("Right");

  /*
      페이지 이동 단축키
   */
  useEffect(() => {
    const handleGoRight = (event) => {
      if ((event.metaKey && event.key === '/') || (event.ctrlKey && event.key === '/')) {
        event.preventDefault();
        const rightIndex = getRightIndex(currentIndex);
        if (rightIndex !== null) {
          setDirection("Right");
          setCurrentIndex(rightIndex);
        }
      }
    };

    const handleGoLeft = (event) => {
      if ((event.metaKey && event.key === 'z') || (event.ctrlKey && event.key === 'z')) {
        event.preventDefault();
        const leftIndex = getLeftIndex(currentIndex);
        if (leftIndex !== null) {
          setDirection("Left");
          setCurrentIndex(leftIndex);
        }
      }
    }

    document.addEventListener('keydown', handleGoRight);
    document.addEventListener('keydown', handleGoLeft);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거
    return () => {
      document.removeEventListener('keydown', handleGoRight);
      document.removeEventListener('keydown', handleGoLeft);
    };
  }, [currentIndex]);

  //const classNames = direction === "right" ? "slideRight" : "slideLeft";

  /*
  이하 로직
   */

  const pageIndexHandler = (index) => {
    setCurrentIndex(index);
    if (index > currentIndex) {
      setDirection("Right");
    } else {
      setDirection("Left");
    }
  }


  const CurrentPage = PAGE_LIST[currentIndex];
  const leftIndex = getLeftIndex(currentIndex)
  const rightIndex = getRightIndex(currentIndex);

  //menu - page navigator 처리
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  /** todo : page template isMenuOpen state */
  return (
    <Wrapper>
      <PageTemplate isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
        <PageNavigator
          isMenuOpen={isMenuOpen}
          onLeftClickHandler={leftIndex !== null ? () => pageIndexHandler(leftIndex) : null}
          onRightClickHandler={rightIndex !== null ? () => pageIndexHandler(rightIndex) : null}
        />
        <TransitionGroup style={{height: "100%", position: "relative"}}
                         childFactory={child => React.cloneElement(
                           child, {
                             timeout: 500,
                             classNames: `slide${direction}`
                           }
                         )}
        >
          <CSSTransition
            key={currentIndex}
            timeout={500}
            classNames={`slide${direction}`}

          >
            <CurrentPage/>
          </CSSTransition>
        </TransitionGroup>
      </PageTemplate>

    </Wrapper>
  );
}

export default PageAssembler;