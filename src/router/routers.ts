import React from "react"
import { Event } from "../pages/Event"
import { Login } from "../pages/Login"

export interface IRoute {
    path: string,
    component: React.ComponentType;
    exact? : boolean
}

export enum RouteLink {
    LOGIN = '/login',
    EVENT = '/'
}

export const publicRoutes:IRoute[] = [
    {path: RouteLink.LOGIN,exact: true,component: Login}
]

export const privateRoutes:IRoute[] = [
    { path: RouteLink.EVENT,exact: true, component: Event }
]