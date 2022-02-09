import { IEvent } from "../../models/Events"
import { IUser } from "../../models/Users"
import { EventAction, EventActionEnum, EventState } from "../types"

const initialState :EventState = {
    events: [] as IEvent[],
    guests: [] as IUser[]
}

export const eventReducer = (state = initialState,action:EventAction):EventState => {
    switch(action.type){
        case EventActionEnum.ADD_EVENT:
            return {
                ...state,
                events: [...state.events,action.payload]
            }
        case EventActionEnum.SET_GUESTS:
            return {
                ...state,
                guests: action.payload
            }
        case EventActionEnum.SET_EVENTS:
            return{
                ...state,
                events: action.payload
            }
        default: return state;
    }
}