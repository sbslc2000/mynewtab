import {BrowserRouter as Router} from "react-router-dom";
import React from "react";
import PageAssembler from "./page/PageAssembler";
import ContextProvider from "./context/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <PageAssembler/>
      </ Router>
    </ContextProvider>
  );
}

export default App;
