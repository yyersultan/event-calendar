import { Button, DatePicker, Form, Input, Select } from "antd"
import React, { FC, useState } from "react"
import { IEvent } from "../models/Events"
import {Moment} from 'moment'
import { IUser } from "../models/Users"
import { useDispatch } from "react-redux"
import { AddEvent } from "../store/actions/event"

interface EventFormForms {
    guests: IUser[],
    setModal: (state: boolean) => void
}
export const EventForm:FC<EventFormForms> = ({guests,setModal}) => {
    const dispatch = useDispatch();
    const[state,setState] = useState<IEvent>({
        author: '',
        description: '',
        date:'',
        guest:''
    });
    const rules = {
        rules :[{required: true,message: 'Required filed'}]
    }
    const onEventFormChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const onDateSelect = (date:Moment|null) => {
        if(date){
            const formatDate = date.toDate();
            const month =formatDate.getMonth() >= 10 ? formatDate.getMonth()+1 : '0'+(formatDate.getMonth()+1) 
            const day = formatDate.getDate() >= 10 ? formatDate.getDate() : '0'+(formatDate.getDate()+1); 
            const year = formatDate.getFullYear();
            setState({
                ...state,
                date: `${day}:${month}:${year}`
            });
        }
        
    }
    const onEventFormSubmit = () => {
        dispatch(AddEvent(state));
        setModal(false);
    }
    return(
        <Form
            onFinish={onEventFormSubmit}
        >
            <Form.Item
                {...rules}
                label='Event desciption'
                name={'description'}
            >
                <Input value={state.description} onChange={onEventFormChange} name={'description'}/>
            </Form.Item>
            <Form.Item  
                {...rules}
                label='Date of Event'
                name={'date'}
            >
                <DatePicker onChange = {onDateSelect}/>
            </Form.Item>
            <Form.Item
                {...rules}
                label='author'
                name={'author'}
            >
                <Input onChange={onEventFormChange} name={'author'}/>
            </Form.Item>
            <Form.Item
                {...rules}
                label='Choose guest'
                name={'guest'}
            >
                <Select
                    onChange={(guest:string) => {setState({...state,guest})}}
                {...rules}
                >
                    {guests.map(g => {
                        return <Select.Option key = {g.username} value={g.username}>
                            {g.username}
                        </Select.Option>
                    })}
                </Select>
            </Form.Item>
            <Form.Item

                name={'submit event button'}
            >
                <Button style={{background:'green',color:'#fff'}} htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}