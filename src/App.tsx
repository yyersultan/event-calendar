	import { Layout } from "antd";
import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import './App.css'
import { AppRoutes } from "./components/AppRoutes";
import { setIsAuth, SetUser } from "./store/actions/auth";
import { setEvents } from "./store/actions/event";


const App:FC = () =>{
  console.log('APP RENDER');
  
  const dispatch = useDispatch();

  useEffect(() => {
    if(localStorage.getItem('isAuth')){
      dispatch(setIsAuth(true));
      const name = (localStorage.getItem('username' || ''));
      dispatch(SetUser(name || ''));
      dispatch(setEvents())
    }
  },[dispatch]); 
  return (
    <Layout>
      <AppRoutes />
    </Layout>
  )
}

export default App;
