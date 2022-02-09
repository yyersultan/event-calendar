import { Menu } from "antd";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { logout } from "../store/actions/auth";

export const Navbar:FC = () => {
    const { username } = useTypedSelector(state => state.auth);
    const dispatch = useDispatch();
    
    const onLogout = () => {
        dispatch(logout());
    }
    return (
        <Menu
            theme="dark"
            mode="horizontal"
        >
            <Menu.Item 
                onClick={onLogout}
                key={'1'}>
                Log out 
            </Menu.Item>
            <div style={{color: '#fff'}}>
                {username} 
            </div>
        </Menu>
    )
}