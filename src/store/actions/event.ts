import { AppDispatch } from "..";
import { authAPI } from "../../api/api";
import { IEvent } from "../../models/Events";
import { IUser } from "../../models/Users";
import { EventActionEnum, SetGuestsAction } from "../types";



export const SetGuests = (guests: IUser[]):SetGuestsAction => ({
    type: EventActionEnum.SET_GUESTS,
    payload: guests
})
export const AddEvent = (event:IEvent) => async(dispatch:AppDispatch) => {
    const events = JSON.parse(localStorage.getItem('events')|| '[]') as IEvent[] ;
    
    const newEvents = [...events,event];
    console.log(newEvents);
    
    localStorage.setItem('events',JSON.stringify(newEvents));
    dispatch({
        type: EventActionEnum.ADD_EVENT,
        payload: event
    })
}
export const getGuests = () => async(dispatch:AppDispatch) => {
    try{
        const data = await authAPI.login();
        dispatch(SetGuests(data));
    }catch(e){
        console.log(e);
        
    }
}

export const setEvents = () => (dispatch:AppDispatch) => {
    const username:string = localStorage.getItem('username') || '';
    const events = JSON.parse(localStorage.getItem('events')|| '[]') as IEvent[] ;

    const userEvents = events.filter(event => event.guest === username );
    
    dispatch({
        type: EventActionEnum.SET_EVENTS,
        payload: userEvents
    });
}