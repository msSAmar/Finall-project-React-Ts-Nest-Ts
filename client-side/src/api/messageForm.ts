import axios from 'axios';
import config from '../config';
import { User } from '../classes/user';

export const fetchMessageForm = async (text:string,like:number,user:User) => {
    const { data } = await axios.post(`${config.api}/rc/add`, {
        text: text,like: like,user: user
    });
    return data;
}
export const fetchMessageFornToHtml = async () => {
    const { data } = await axios.get(`${config.api}/rc/get`, {
       
    });
    return data;
}