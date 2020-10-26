import React from "react";
import styled from "@styled-components";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <PageWrap>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </PageWrap>
  );
}

const PageWrap = styled.div`
  position: relative;
  width: 100%;
  min-height: 100%;
  overflow: auto;
`;

export default App;
