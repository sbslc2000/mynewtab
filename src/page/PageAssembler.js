import {useEffect, useState} from "react";
import React from 'react';
import MainPage from "./MainPage";
import TodoListPage from "./TodoListPage";
import styled from "styled-components";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import "./Slide.css";
import Header from "../components/Header";
import Sidebar from "../components/sidebar/Sidebar";
import PageNavigator from "../components/PageNavigator";
import WidgetFrame from "../components/widget/WidgetFrame";
import * as PropTypes from "prop-types";
import DroppableWrapper from "../components/widget/DroppableWrapper";
import {DndContext} from "@dnd-kit/core";
import YoutubeWidget from "../components/widget/youtube/YoutubeWidget";
import YoutubeWidgetHandler from "../components/widget/youtube/YoutubeWidgetHandler";
import PlayListPage from "./PlayListPage";

const Wrapper = styled.div`
  //display: flex;
  height: 100%;
`;

const PAGE_LIST = [
    MainPage, PlayListPage, TodoListPage,
];

const getLeftIndex = (index) => {
    return index - 1 < 0 ? null : index - 1;
}

const getRightIndex = (index) => {
    return index + 1 >= PAGE_LIST.length ? null : index + 1;
}


DroppableWrapper.propTypes = {children: PropTypes.node};
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


    //Widget Draggable

    const [widgetX, setWidgetX] = useState(100);
    const [widgetY, setWidgetY] = useState(100);


    const handleDragEnd = (result) => {
        console.log(result);
        const {active, over} = result;
        if (active.id !== over.id) {


            const xDiff = result.delta.x;
            const yDiff = result.delta.y;

            const innerWidth = window.innerWidth;
            const innerHeight = window.innerHeight;

            const widgetWidth = 400;
            const widgetHeight = 250;

            let newX = widgetX + xDiff;
            if (newX + widgetWidth > innerWidth) {
                newX = innerWidth - widgetWidth;
            }
            if (newX < 0) {
                newX = 0;
            }

            let newY = widgetY + yDiff;
            if (newY + widgetHeight > innerHeight) {
                newY = innerHeight - widgetHeight;
            }
            if (newY < 0) {
                newY = 0;
            }

            setWidgetX(newX);
            setWidgetY(newY);

        }

    }
    // <YoutubeWidget x={widgetX} y={widgetY} />
    return (

        <Wrapper>
            <DndContext onDragEnd={handleDragEnd}>
                <DroppableWrapper>
                    <YoutubeWidgetHandler x={widgetX} y={widgetY}/>
                    <Header/>
                    <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}></Sidebar>
                    <PageNavigator
                        isMenuOpen={isMenuOpen}
                        onLeftClickHandler={leftIndex !== null ? () => pageIndexHandler(leftIndex) : null}
                        onRightClickHandler={rightIndex !== null ? () => pageIndexHandler(rightIndex) : null}/>
                    <TransitionGroup style={{height: "100%",position:"relative"}}
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
                </DroppableWrapper>
            </DndContext>
        </Wrapper>


    );
}

export default PageAssembler;