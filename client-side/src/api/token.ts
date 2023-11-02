import axios from 'axios';
import config from '../config';
import { User } from '../classes/user';

export const validateJWT = async(token: string):Promise<boolean> =>{
    console.log("in token api client")
  return await axios.post(`${config.api}/token/validate-jwt`,{token:token});
  // console.log("in token api client after get valid: " + valid);
  // return valid;
}

export const getUserFromToken = async(token:string,id:number)=>{
  console.log("in token api client get user from token");
  const { data } = await axios.post(`${config.api}/token/decrypt`, {
    token: token,id: id
  });

  
  return data;
}