import { Button, Card, Form, Input, Row } from "antd";
import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import "../App.css";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { login } from "../store/actions/auth";

interface authForm {
    email: string,
    password: string
}

export const Login: FC = () => {
  const dispatch = useDispatch();
  const {isLoading,error} = useTypedSelector(state => state.auth);
  const[authForm,setAuthForm] = useState<authForm>({
      email: '',
      password: ''
  });   

  const onAuthFormChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      setAuthForm({
          ...authForm,
          [e.target.name]: e.target.value
      })
  }
  const onAuthFormSubmit = () => dispatch(login(authForm.email,authForm.password));

  return (
    <div className="AuthContainer">
      <Card className="card">
        <Form name="auth" onFinish={onAuthFormSubmit}>
          <Form.Item>
            {error && <div style={{color: 'red'}}>{error}</div>}
          </Form.Item>
          <Form.Item 
            label="Username" 
            name={"email"}
            rules={[{ required:true,message:'Please input your username' }]}
            >
            <Input 
                name="email" 
                value={authForm.email} 
                onChange={onAuthFormChange}/>
          </Form.Item>
          <Form.Item 
            label="Password" 
            name={"password"}
            rules={[{ required:true,message:'Please input your username' }]}
           >
            <Input.Password 
                name="password"  
                value={authForm.password} 
                onChange={onAuthFormChange}/>
          </Form.Item>
          <Row justify= 'space-between'>
          <Form.Item>
            <Button
                loading = {isLoading}
                type="primary" 
                htmlType="submit">
              Login
            </Button>
          </Form.Item>
          </Row>
        </Form>
      </Card>
    </div>
  );
};
