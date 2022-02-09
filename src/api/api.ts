import axios     from "axios"
import { IUser } from "../models/Users"

export const authAPI = {
    login: async ():Promise<IUser[]> => {
        const {data} = await  axios.get<IUser[]>('./users.json');
        return data;
    }
}