import { IEvent } from "../models/Events";
import { IUser } from "../models/Users";

export interface AuthState {
    isAuth: boolean,
    username: string,
    isLoading: boolean
    error: string
}

export enum AuthActionEnum {
    SET_AUTH = 'SET_AUTH',
    SET_LOADING = 'SET_LOADING',
    SET_ERROR = 'SET_ERROR',
    SET_USER = 'SET_USER'
}

export interface SetAuthAction {
    type: AuthActionEnum.SET_AUTH,
    payload : boolean
}

export interface SetIsLoadingAction {
    type: AuthActionEnum.SET_LOADING,
    payload: boolean
}

export interface SetErrorAction {
    type: AuthActionEnum.SET_ERROR,
    payload: string
}
export interface SetUserAction {
    type: AuthActionEnum.SET_USER,
    payload: string
}

export type AuthAction = 
SetAuthAction | SetIsLoadingAction|
SetErrorAction | SetUserAction;


//  -------------------------------------------------------EVENTS TYPE-------------------------------------------------------------------------------------
export interface EventState {
    events: IEvent[],
    guests: IUser[]
}

export enum EventActionEnum {
    ADD_EVENT = 'ADD_EVENT',
    SET_EVENTS = 'SET_EVENTS',
    SET_GUESTS = 'GET_GUESTS'
}

export interface AddEventAction {
    type: EventActionEnum.ADD_EVENT,
    payload: IEvent
}

export interface SetGuestsAction {
    type: EventActionEnum.SET_GUESTS,
    payload: IUser[] 
}

export interface SetEventsAction {
    type:EventActionEnum.SET_EVENTS,
    payload: IEvent[]
}

export type EventAction = 
AddEventAction | SetGuestsAction | SetEventsAction