import axios from 'axios';
import config from '../config';
import { User } from '../classes/user';

export const fetchEnglishText = async (text:string,user:User) => {
    const { data } = await axios.post(`${config.api}/writing/add`, {
        text: text,user: user
    });
    return data;
}