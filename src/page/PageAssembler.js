import {useEffect, useState} from "react";
import MainPage from "./MainPage";
import TodoListPage from "./TodoListPage";
import styled from "styled-components";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import "./Slide.css";

const Wrapper = styled.div`
  display: flex;
`;

const PAGE_LIST = [
    MainPage
];

const getLeftIndex = (index) => {
    return index - 1 < 0 ? null : index - 1;
}

const getRightIndex = (index) => {
    return index + 1 >= PAGE_LIST.length ? null : index + 1;
}
const PageAssembler = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState();


    /*
        페이지 이동 단축키
     */

    useEffect(() => {
        const handleGoRight = (event) => {
            if (event.metaKey && event.key === '/') {
                console.log("right");
                event.preventDefault();
                const rightIndex = getRightIndex(currentIndex);
                console.log(rightIndex);
                if(rightIndex !== null) {
                    setDirection("right");
                    setCurrentIndex(rightIndex);
                }
            }
        };

        const handleGoLeft = (event) => {
            if (event.metaKey && event.key === 'z') {
                console.log("left");
                event.preventDefault();
                const leftIndex = getLeftIndex(currentIndex);
                if(leftIndex !== null) {
                    setDirection("left");
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



    /*
    이하 로직
     */


    const pageIndexHandler = (index) => {
        if(index > currentIndex) {
            setDirection("right");
        } else {
            setDirection("left");
        }

        setCurrentIndex(index);
        console.log(index);
    }

    const classNames = direction === "left" ? "slideRight" : "slideLeft";



    const CurrentPage = PAGE_LIST[currentIndex];
    const leftIndex = getLeftIndex(currentIndex)
    const rightIndex = getRightIndex(currentIndex);

    console.log(currentIndex);

    return (

        <TransitionGroup>
            <CSSTransition
                key={currentIndex}
                timeout={300}
                classNames={classNames}
            >
                <Wrapper>
                    <CurrentPage
                        leftHandler={leftIndex !== null ? () => pageIndexHandler(leftIndex) : null}
                        rightHandler={rightIndex !== null ? () => pageIndexHandler(rightIndex) : null}
                    />
                </Wrapper>
            </CSSTransition>
        </TransitionGroup>


    );
}

export default PageAssembler;