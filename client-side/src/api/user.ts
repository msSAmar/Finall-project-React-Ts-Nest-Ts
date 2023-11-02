import axios from 'axios';
import config from '../config';
import { Student } from '../classes/student';
import Cookies from 'js-cookie';


export const fetchTokenIn = async (email: string, password: string) => {
    const { data } = await axios.post(`${config.api}/student/signIn`, {
        email: email, password: password
    });
    Cookies.set('jwt',data.access_token,{expires:30})
        console.log("token in client"+data.access_token);
    return data;
}
export const fetchTokenUp = async (user: Student) => {
    console.log(user);
    const { data } = await axios.post(`${config.api}/student/signUp`, {
        
        firstName: user.firstName, lastName: user.lastName, phone: user.phone, email: user.email, password: user.password
    });
    Cookies.set('jwt',data.access_token,{expires:30});
    console.log("token in client"+data.access_token);
    return data.access_token;
}
export const fetchLevel = async (id:undefined|string,level:number) => {
    const { data } = await axios.put(`${config.api}/student/id`, {
        level: level
    });
    
    return data;
}


