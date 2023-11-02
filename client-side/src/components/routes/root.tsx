import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './root.css'
import { NavigateFunction, Outlet, useNavigate } from 'react-router-dom';
import { Box, Button, Chip, Dialog, DialogActions, DialogContent } from '@mui/material';
///import { MdClose } from 'react-icons/md';
import { signOut } from '../../features/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { User } from '../../classes/user';


export default function Root() {
    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();
    const navigate: NavigateFunction = useNavigate();
    const user: User = useSelector((state: any) => state.user);
    const hello = "Hello | " + user.firstName;
/////////////קומפוננטת הראוטינג
    const handleClickOpen = (e: any) => {
        e.preventDefault();
        setOpen(true);
    };
    const handleClose = (_event: React.SyntheticEvent<unknown>, reason?: string) => {
        if (reason !== 'backdropClick') {
            setOpen(false);
        }
    };
    const handleSignOut = () => {
        // Remove all items from local storage
        dispatch(signOut())
        navigate('SignIn', { replace: true })
    }
    return (
        <>
            <div className="root-component">
                
                {/* חסר פה כפתור יש להעתיק מ-bootstrap */}
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                
                    <div className="container-fluid">
                        
                        <div id="buttonNav">
                          
                            <Button variant="text" onClick={() => navigate('/', { replace: true })} style={{ color: 'green', marginRight: '20px', fontSize: '16px' }}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" className="bi bi-bank2" viewBox="0 0 16 16">
  <path d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916l-7.5-5zM12.375 6v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1H.5z"/>
</svg><b>בית</b></Button>
                            <Button variant="text" onClick={() => navigate('/', { replace: true })} style={{ color: 'red', marginRight: '20px', fontSize: '16px' }} ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" className="bi bi-calendar-heart-fill" viewBox="0 0 16 16">
  <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5ZM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
</svg><b> אודות</b></Button>
                            <Button variant="text" onClick={handleClickOpen} style={{ color: '#da31c6', marginRight: '20px', fontSize: '16px' }}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" className="bi bi-backpack4-fill" viewBox="0 0 16 16">
  <path d="M8 0a2 2 0 0 0-2 2H3.5a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h4v.5a.5.5 0 0 0 1 0V7h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H10a2 2 0 0 0-2-2Zm1 2a1 1 0 0 0-2 0h2Zm-4 9v2h6v-2h-1v.5a.5.5 0 0 1-1 0V11H5Z"/>
  <path d="M14 7.599A2.986 2.986 0 0 1 12.5 8H9.415a1.5 1.5 0 0 1-2.83 0H3.5A2.986 2.986 0 0 1 2 7.599V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.599ZM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-3Z"/>
</svg>

                                <b> לימודים </b></Button>
                                <Button variant="text" onClick={() => navigate('/Chat', { replace: true })} style={{ color: 'blue', marginRight: '20px', fontSize: '16px' }} ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" className="bi bi-chat-heart-fill" viewBox="0 0 16 16">
  <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15Zm0-9.007c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
</svg><b> צאט עם המורה</b></Button>
                            <Button variant="text" onClick={() => navigate('/Chalange', { replace: true })} style={{ color: '#9b0089f9', marginRight: '20px', fontSize: '16px' }} ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" className="bi bi-award-fill" viewBox="0 0 16 16">
  <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z"/>
  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
</svg><b>האתגר השבועי</b></Button>
                            <Button variant="text" onClick={() => navigate('/Help', { replace: true })} style={{ color: 'orange', marginRight: '20px', fontSize: '16px' }}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" className="bi bi-balloon-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386Z"/>
</svg><b> לאיזור האישי</b></Button>
                    
                           
                            <div id="dialog" style={{ display: 'inline-block' }}>
                                <Dialog disableEscapeKeyDown open={open} onClose={handleClose} >
                                    <DialogContent >
                                        <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                            <Button variant="contained" onClick={() => navigate('/Rc', { replace: true })} style={{ backgroundColor: '#8d4c73', fontSize: '14px', width: '400px', marginBottom: '20px' }} ><b> Reading Comprehension | הבנת הנקרא</b></Button>
                                            <Button variant="contained" onClick={() => navigate('/Grammar', { replace: true })} style={{ backgroundColor: '#80469f', fontSize: '14px', width: '400px', marginBottom: '20px' }} ><b> Grammer | דקדוק</b></Button>
                                            <Button variant="contained" onClick={() => navigate('/Vocabulary', { replace: true })} style={{ backgroundColor: 'orange', fontSize: '14px', width: '400px', marginBottom: '20px' }} ><b> Vocabulary | אוצר מילים</b></Button>
                                            {/* <Button variant="contained" onClick={() => navigate('/', { replace: true })} style={{ backgroundColor: 'lightblue', fontSize: '14px', width: '400px', marginBottom: '20px' }} ><b> Reading | קריאה</b></Button> */}
                                            <Button variant="contained" onClick={() => navigate('/Writing', { replace: true })} style={{ backgroundColor: '#2385c4', fontSize: '14px', width: '400px', marginBottom: '20px' }} ><b> Writing | כתיבה</b></Button>
                                           
                                        </Box>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleClose}>close</Button>
                                    </DialogActions>
                                </Dialog>
                               
                                <b>    <Chip sx={{ marginRight: '100px' }} color="secondary" label={hello} /></b>
                                
                                <Button variant="contained" onClick={handleSignOut} style={{ backgroundColor: '#00355c', color: 'white', fontSize: '14px', marginRight: '25px' }}><b>Sign Out | התנתק</b></Button>
                               
                            </div>
                           
                        </div>
                       
                    </div>
                   
                </nav>
                 
                        
                <div>
                
                        
                        
                            
                        
                {/* <img src="/src/images/1.jpg" alt="img"width='1200px' /> */}
                    <Outlet />
                </div>
                
            </div>
            
        </>
    );
}

