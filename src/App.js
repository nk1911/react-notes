import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Create from "./pages/Create";
import Notes from "./pages/Notes";
import "./app.css";
import Layout from "./components/Layout";
const myTheme = createTheme({
  palette: {
    primary: {
      main: "#00bcd4",
      light: "#00ffff",
      dark: "#00acc1",
      contrastText: "#eeeeee",
    },
    secondary: {
      main: "#ff822f",
      light: "#ffa05d",
      dark: "#ff741d",
      contrastText: "#eeeeee",
    },
  },
});
const App = () => {
  return (
    <>
      <ThemeProvider theme={myTheme}>
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/">
                <Notes />
              </Route>
              <Route path="/create">
                <Create />
              </Route>
            </Switch>
          </Layout>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
