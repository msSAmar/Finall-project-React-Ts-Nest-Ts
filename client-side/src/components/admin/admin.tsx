import { NavigateFunction, useNavigate } from 'react-router-dom';
import './admin.css'
import { useEffect, useState } from "react";
import {  } from "../../features/slices/userSlice";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import DialogActions from '@mui/material/DialogActions';


function Admin() {
    const [open, setOpen] = useState(false);
    const navigate: NavigateFunction = useNavigate();
    const handleClickOpen = (e: any) => {
        e.preventDefault();
        setOpen(true);
    };
    const handleClose = (_event: React.SyntheticEvent<unknown>, reason?: string) => {
        if (reason !== 'backdropClick') {
            setOpen(false);
        }
    };
   
       
    return (
        <>
        <div className="admin-component">
                {/* חסר פה כפתור יש להעתיק מ-bootstrap */}
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                
                    <div className="container-fluid">
                        <div id="buttonNav">
                         
                            <Button variant="text" onClick={handleClickOpen} style={{ color: '#2385c4', marginRight: '20px', fontSize: '16px' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" className="bi bi-backpack-fill" viewBox="0 0 16 16">
  <path d="M5 13v-3h4v.5a.5.5 0 0 0 1 0V10h1v3H5Z"/>
  <path d="M6 2v.341C3.67 3.165 2 5.388 2 8v5.5A2.5 2.5 0 0 0 4.5 16h7a2.5 2.5 0 0 0 2.5-2.5V8a6.002 6.002 0 0 0-4-5.659V2a2 2 0 1 0-4 0Zm2-1a1 1 0 0 1 1 1v.083a6.04 6.04 0 0 0-2 0V2a1 1 0 0 1 1-1Zm0 3a4 4 0 0 1 3.96 3.43.5.5 0 1 1-.99.14 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.14A4 4 0 0 1 8 4ZM4.5 9h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5Z"/>
</svg>
                                <b> הוספת משימות </b></Button>
                            
                           
                            <Button variant="text" onClick={() => navigate('/Chalange', { replace: true })} style={{ color: '#2385c4', marginRight: '20px', fontSize: '16px' }}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" className="bi bi-award-fill" viewBox="0 0 16 16">
  <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z"/>
  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
</svg><b>לאתגר השבועי</b></Button>
                           <Button variant="text" onClick={() => navigate('/Chat', { replace: true })} style={{ color: 'wite', marginRight: '20px', fontSize: '16px' }} ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" className="bi bi-chat-heart-fill" viewBox="0 0 16 16">
  <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15Zm0-9.007c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
</svg><b> צאט עם המורה</b></Button>
                            <div id="dialog" style={{ display: 'inline-block' }}>
                                <Dialog disableEscapeKeyDown open={open} onClose={handleClose} >
                                    <DialogContent >
                                        <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                            <Button variant="contained" onClick={() => navigate('/Addassiment', { replace: true })} style={{ backgroundColor: '#8d4c73', fontSize: '14px', width: '400px', marginBottom: '20px' }} ><b> Reading Comprehension | שאלות להבנת הנקרא</b></Button>
                                            <Button variant="contained" onClick={() => navigate('/Addassiment', { replace: true })} style={{ backgroundColor: '#80469f', fontSize: '14px', width: '400px', marginBottom: '20px' }} ><b> Grammer | שאלות לדיקדוק</b></Button>
                                            <Button variant="contained" onClick={() => navigate('/Addassiment', { replace: true })} style={{ backgroundColor: 'orange', fontSize: '14px', width: '400px', marginBottom: '20px' }} ><b> Vocabulary | שאלות לאוצר מילים</b></Button>
                                            <Button variant="contained" onClick={() => navigate('/Writing', { replace: true })} style={{ backgroundColor: '#2385c4', fontSize: '14px', width: '400px', marginBottom: '20px' }} ><b> Writing | בדיקת משימת קריאה </b></Button>
                                            
                                        </Box>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleClose}>close</Button>
                                    </DialogActions>
                                </Dialog>
                                <a className="navbar-brand" onClick={() => navigate('/', { replace: true })}><img src={"/src/images/logo.png"} alt="Logo" width="200px" /></a>
                            </div>
                           
                        </div>
                       
                    </div>
                </nav>
                </div>

        </>
    )
}

export default Admin
