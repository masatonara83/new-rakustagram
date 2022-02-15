import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";
import { Header } from "../components/organisms/layout/Header";
import { Login } from "../components/pages/Login";
import { TimeLine } from "../components/pages/TimeLine";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { LoginUserProvider } from "../providers/LoginUserProviders";
import { afterLoginRoutes } from "./AfterLoginRoutes";

export const Router:VFC = memo(() => {
  return (
    <Switch>
      <LoginUserProvider>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/rakustagram" render={({match : { url }}) => (
          <Switch>
            {afterLoginRoutes.map((route) => (
              <Route key={route.path} exact={route.exact} path={`${url}${route.path}`} >
                <HeaderLayout>
                  {route.children}
                </HeaderLayout>
              </Route>
            ))}
          </Switch>
        )} />
      </LoginUserProvider>
    </Switch>
  )
});