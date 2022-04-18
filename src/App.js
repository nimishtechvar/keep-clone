import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import MainPage from "./containers/MainPage";

import "./App.css";
import {theme} from "./style/Theme";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";

function App() {

  
  return (
    <ThemeProvider theme={theme}>
      <Header />
        <MainPage />
      <Footer />
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
