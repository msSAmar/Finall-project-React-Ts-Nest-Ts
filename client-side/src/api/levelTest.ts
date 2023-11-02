import axios from 'axios';
import config from '../config';
import { User } from '../classes/user';

export const fetchLevelTest = async () => {
    const { data } = await axios.get(`${config.api}/Test/get`, {
       
    });
    return data;
}
