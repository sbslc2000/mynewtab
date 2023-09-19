import YoutubeProvider from "./YoutubeProvider";
import {ThemeProvider} from "./ThemeProvider";
import {GlobalStyle} from "../theme/GlobalStyle";
import React from "react";

const ContextProvider = (props) => {
  return (
    <ThemeProvider>
      <GlobalStyle/>
      <YoutubeProvider>
        {props.children}
      </YoutubeProvider>
    </ThemeProvider>
  );
}

export default ContextProvider;