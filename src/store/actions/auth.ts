import { AppDispatch } from ".."
import { authAPI } from "../../api/api"
import { AuthActionEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction } from "../types"

export const setIsAuth = (auth:boolean):SetAuthAction => {
    return {
        type: AuthActionEnum.SET_AUTH,
        payload: auth
    }
}

export const setIsLoading = (isLoading: boolean):SetIsLoadingAction => {
    return {
        type : AuthActionEnum.SET_LOADING,
        payload: isLoading
    }
}

export const setError = (error: string):SetErrorAction => ({
    type: AuthActionEnum.SET_ERROR,
    payload: error
})
export const SetUser = (username: string):SetUserAction => ({
    type: AuthActionEnum.SET_USER,
    payload: username
});

export const login = (username: string,password: string) => async(dispatch:AppDispatch) => {
    try{
        dispatch(setIsLoading(true));
        setTimeout(async() => {
            const data = await authAPI.login();
            const isUser = data.find(user => user.username === username && user.password === password);
            if(isUser){
                localStorage.setItem('username',isUser.username);
                localStorage.setItem('isAuth','true');
                dispatch(setIsAuth(true));
                dispatch(SetUser(isUser.username));
            }else{
                dispatch(setError('Username or password inCorrect'));
            }  
        },1000)
        
    }catch(e){
        console.log(e);
        
    }
}

export const logout = () => async(dispatch:AppDispatch) => {
    localStorage.removeItem('isAuth');
    localStorage.removeItem('username');
    dispatch(setIsAuth(false));
    dispatch(SetUser(''));  
}