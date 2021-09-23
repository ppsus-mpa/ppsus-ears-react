import React from "react";
import {Switch,Route} from "react-router-dom"
import LoginSite from "./pages/login/LoginSite";

function Site() {
    return (
        <div>
            <p>Site</p>
            <Switch>
                <Route path={'/login'}>
                    <LoginSite/>
                </Route>
            </Switch>
        </div>
    );
}

export default Site;
