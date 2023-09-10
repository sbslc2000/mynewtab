import './App.css';
import MainPage from "./page/MainPage";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import TodoListPage from "./page/TodoListPage";

import {BrowserRouter as Router, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import "./App.css";
import React, {useState} from "react";


function AnimationApp() {
    const location = useLocation();
    const navigate = useNavigate();
    const [direction, setDirection] = useState();

    const pageNavigateHandler = (url,direction) => {
        setDirection(direction);
        navigate(url);
    }

    const classNames = direction === "left" ? "slideRight" : "slideLeft";

    console.log(location.key);
    return (
        <TransitionGroup>
            <CSSTransition
                key={location.key}
                timeout={300}
                classNames={classNames}
            >
                <Routes >
                    <Route path="/" element={<MainPage
                        pageNavigateHandler = {pageNavigateHandler}
                    />}/>
                    <Route path="/todo" element={<TodoListPage
                        pageNavigateHandler = {pageNavigateHandler}
                    />}/>
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    );
}

function App() {
    return (
        <Router>
            <AnimationApp/>
        </Router>
    );
}

export default App;
