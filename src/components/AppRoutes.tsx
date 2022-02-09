import { Redirect, Route, Switch } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector"
import { privateRoutes, publicRoutes } from "../router/routers";

export const AppRoutes = () => {
    const { isAuth } = useTypedSelector(state => state.auth);

    return (
        isAuth ? 
        // EVENTS PAGE
        <Switch>
            { 
                privateRoutes.map(route => {
                    return <Route 
                            key={route.path}
                            path={route.path} 
                            component= {route.component}
                            exact = {route.exact}
                            />
                })
            }
            <Redirect to={'/'}/>
        </Switch> :
        // LOGIN PAGE
        <Switch>
            {
                publicRoutes.map(route => {
                    return <Route  
                            key={route.path}
                            path={route.path}
                            component={route.component}
                            exact = {route.exact}
                        />
                })
            }
            <Redirect to = {'/login'}/>
        </Switch>
    )
}