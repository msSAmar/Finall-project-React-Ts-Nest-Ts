import { NavigateFunction, useNavigate } from 'react-router-dom';
import './home.css'
import { Cookie } from '../../services/Cookie'
import { useEffect, useState } from "react";
//import { DisplayDailyConsumption } from "../DisplayDailyConsumption/DisplayDailyConsumption"
import { useDispatch, useSelector } from "react-redux";
import {  } from "../../features/slices/userSlice";
import { User } from '../../classes/user';

////////////נשלפת רק אם המשתמש נרשם כבר ושמור ב
////////////////////localStorage את האובייקט של היוזר והלוגין
function Home() {
    const navigate: NavigateFunction = useNavigate();
    const user: User = useSelector((state: any) => state.user);
    
   
       
    return (
        <>
        
            {/* <div className="parallax">{user.firstName}</div> */}
            <div id="englishLink">
                <div id="divTitle">
                    <b><h1 className="conection">חיבור חברתי  <br />לשפת האנגלית</h1></b>
                    
                <div className="link" onClick={() => navigate('/', { replace: true })}><img src={"/src/images/logo.png"} alt="Logo" width="200px" /></div>
                    {/* <a className='aicon'onClick={() => navigate('/About', { replace: true })}><img className='img' src="src/images/logo.png" alt="logo" width="500" /></a> */}
                    
                </div>

            </div>
        </>
    )
}

export default Home
