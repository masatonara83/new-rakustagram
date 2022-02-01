import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";
import { Header } from "../components/organisms/layout/Header";
import { Login } from "../components/pages/Login";
import { TimeLine } from "../components/pages/TimeLine";

export const Router:VFC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/timeline">
        <Header/>
          <TimeLine />
      </Route>
    </Switch>
  )
});