import React, { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchMessageFornToHtml,fetchMessageForm } from '../../api/messageForm';
import  '../reading-comprehension/reading-comprehension.css';
import { MessageForm } from '../../classes/massageForm';
import { User } from '../../classes/user';
import { Button} from '@mui/material';
function Reading_comprehension() {
  const [reload , setReload] = useState(false);
  const [text, setText] = useState("");
  const [like, setLike] = useState(0);
  const [showPost, setShowPost] = useState(false); 
  const[ArrayMessage, setArrayMessage] = useState([]);
  const user: User = useSelector((state: any) => state.user);
  const submit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    ////////////העברת אובייקט הפוסט לדאטה בייס
    fetchMessageForm(text, like,user)
        .then((data) =>console.log(data))
        .catch((err) => {
            console.log(err)
        });
        /////////רפרוש של הדף בשביל שישלף הפוסטים שוב משום שהם  נשלפים בטעינת הדף
        setReload(!reload);
     
  }
  ////////////שליפת הפוסטים בטעינת הדף
  useEffect(() => {
    fetchData();
  }, [[reload]]);

  const fetchData = async () => {
    try {
      /////////////קריאת שרת לשליפת הפוסטים
      await fetchMessageFornToHtml()
      .then((data) =>setArrayMessage(data) )
      .catch((err) => {
          console.log(err)
      }); 
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  ////////////////הצגת אלמנט הוספת פוסט
  const newPost = () => {
    console.log('Hi, at post');
    setShowPost(!showPost); 
    
  };

  return (
    <>
   
    <div className='titles'>
    האתגר השבועי של - {user.firstName}
    <div  className="fs-4" > <p className="fst-italic" >Mali, a 9-year-old girl, loves winter very much and especially snow,<br />
       looking out the window, watching the many snows falling to the ground,<br /> wearing a coat, gloves and a hat, what will she do today?<br />
"Mellie," mom calls her, "come help me"</p>
<div className='assiment'><p>המשיכו את הסיפור, תגובה תזכה אתכם בכוכב!</p></div>

<img src="/src/images/t(1).webp" alt="" width={'100px'}/>
</div>
{/*  
       <div className='assiment'>
      
       <br />
       <div  className='chalange fw-light' >המשיכו את הסיפור תגובה תזכה אתכם בכוכב!</div>
       
       </div> */}
       
    </div>
    
   <br /><div className='btnp'><Button onClick={newPost} variant="contained"  style={{ color: 'rgb(43, 226, 226)', marginRight: '200px', fontSize: '20px' }} color="secondary">  new post
   </Button>
  
    </div> 
    <div className="forum-container">
      {showPost && (
       <form className="create-post-form" onSubmit={submit}>
       <h2>Create a New Post</h2>
       <div>
         <label htmlFor="post-title">Title:</label>
         <input type="text" id="post-title" name="post-title" required/>
       </div>
       <div>
         <label htmlFor="post-content">Content:</label>
         <textarea id="post-content" name="post-content"  className="form-control form-control-lg"
             placeholder="your message-התגובה שלך"
             value={text}
             onChange={e => setText(e.target.value)}
             title="please enter your message"
             required></textarea>
       </div>
       <div className="form-group">
       <label htmlFor="formControlRange">כמה אהבת</label>
       <input 
       type="range" className="form-control-range" id="formControlRange"
       value={like}
             onChange={e => setLike(parseInt(e.target.value))}/>
         </div>
       <button type="submit" >Create Post</button>
     </form>
      )}
  
</div>

    <div className="forum-container">
  <h1>your responses</h1>
{  ArrayMessage.map((post:MessageForm) => (
      <div className="forum-post">
        <h3>{post.user?.firstName} </h3>
        <p><h5>Text:</h5> {post.text}</p>
        <p><h5>Like:</h5> {post.like}</p>
        <p><h5>Time:</h5> {post.time}</p>
      </div>
       ))}
  <div className="forum-post">
    <h3>Post Title</h3>
    <p></p>
   

  </div>

 
  
</div>
      
    </>
  )
}

export default Reading_comprehension;