import axios from 'axios';
import config from '../config';


export const fetchQuiz = async () => {
    const { data } = await axios.get(`${config.api}/Assiment/get`, {
       
    });
    return data;
}
export const fetchAssiment = async (_id:number,stars:number) => {
    const { data } = await axios.put(`${config.api}/Assiment/put/id`, {
      stars:stars 
    });
    return data;
}
