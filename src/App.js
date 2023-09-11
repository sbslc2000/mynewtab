import './App.css';
import MainPage from "./page/MainPage";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import TodoListPage from "./page/TodoListPage";

import {BrowserRouter as Router, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import "./App.css";
import React, {useState} from "react";
import {ThemeProvider} from "./context/ThemeProvider";
import {GlobalStyle} from "./theme/GlobalStyle";

function AnimationApp() {
    const location = useLocation();
    const navigate = useNavigate();
    const [direction, setDirection] = useState();

    const pageNavigateHandler = (url, direction) => {
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
                <Routes>
                    <Route path="/" element={<MainPage
                        pageNavigateHandler={pageNavigateHandler}
                    />}/>
                    <Route path="/todo" element={<TodoListPage
                        pageNavigateHandler={pageNavigateHandler}
                    />}/>
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    );
}


function App() {
    return (
        <ThemeProvider>
            <GlobalStyle/>
                <Router basename={process.env.PUBLIC_URL}>
                    <AnimationApp/>
                </ Router>
        </ThemeProvider>
    );
}

export default App;
