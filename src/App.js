import './App.css';

import {BrowserRouter as Router, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import "./App.css";
import React, {useState} from "react";
import {ThemeProvider} from "./context/ThemeProvider";
import {GlobalStyle} from "./theme/GlobalStyle";
import PageAssembler from "./page/PageAssembler";

function App() {
    return (
        <ThemeProvider>
            <GlobalStyle/>
                <Router basename={process.env.PUBLIC_URL}>
                    <PageAssembler/>
                </ Router>
        </ThemeProvider>
    );
}

export default App;
