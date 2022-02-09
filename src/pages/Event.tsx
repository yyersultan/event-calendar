import { Badge, Button, Calendar, Row } from "antd";
import Modal from "antd/lib/modal/Modal";
import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { EventForm } from "../components/EventForm";
import { Navbar } from "../components/Navbar";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { getGuests, setEvents } from "../store/actions/event";
import {Moment} from 'moment'

export const Event: FC = () => {
    const dispatch = useDispatch();
    const { guests,events } = useTypedSelector(state => state.event);
    const[modal,setModal] = useState(false);
    
    useEffect(() => {
        dispatch(getGuests());
        dispatch(setEvents());
    },[dispatch]);

    const changeModal = () => setModal(prev => !prev);

    const  dateCellRender = (value:Moment) => {
       
        
        
        return (
            <ul  style={{listStyle:'none'}}>
                { events.map((event,i) => {
                    const dateList = event.date.split(':'); 
                    console.log(value.month());
                    
                    if(+dateList[0] === value.date() ){
                        return <li key={`${event.description}_${i}`}>
                            <Badge status='success' text = {event.description}/>
                    </li>
                    }
                }) }
            </ul>
        )
    }

    return(
        <>
            <Navbar />
            {/* <div>{JSON.stringify(events)}</div> */}
            <Calendar dateCellRender={dateCellRender} /> 
            <Row justify="center">
                <Button onClick={changeModal} type= 'primary' >
                    Add Event
                </Button>
            </Row>
            <Modal
                title='Event Form'
                visible={modal}
                footer={null}
                onCancel={changeModal}
            >
                <EventForm 
                    guests = {guests}
                    setModal = {setModal}
                />
            </Modal>
        </>
    )
}