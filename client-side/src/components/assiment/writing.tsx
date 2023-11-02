import React, { useEffect, useRef,useState } from 'react';
import { useSelector } from 'react-redux';
import emailjs from '@emailjs/browser';
import { User } from '../../classes/user';
import { fetchEnglishText } from '../../api/writing';
import { fetchAssiment, fetchQuiz } from '../../api/assiment';
import { Assiment } from '../../classes/assiment';

const Writing = () => {
  const form = useRef<HTMLFormElement>(null);
  const [text, setText] = useState("");
  const[writingObject, setwritingObject] = useState<Assiment>();
  useEffect(() => {
    fetchAll();
  }, []);
  async function fetchAll():Promise<void>{
    const objects = await fetchQuiz();
    const part4Object = objects.filter((obj:any) => obj.part === 4);
    console.log(part4Object);
    const levelObject = part4Object.filter((obj:any) => obj.level === 0);
    setwritingObject(levelObject);
    console.log(writingObject);
  }
  
  const user: User = useSelector((state: any) => state.user);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
   ///////////////////שליחה של האוביקט לדאטה בייס
    fetchEnglishText(text,user);
    calculate();
    // if (form.current) {
    //   emailjs.sendForm(
    //       'service_adhxq56',
    //       'template_3dpocha',
    //       form.current,
    //       'lHpkBBTF9qZW_zxf_'
    //     )
    //     .then(
    //       (result) => {
    //         // הצג למשתמש הודעת הצלחה
    //       },
    //       (error) => {
    //         // הצג למשתמש הודעת שגיאה
    //       }
    //     );
    // }
  };

const calculate=()=>{
  fetchAssiment(Number(user._id),1);
  alert('הצלחת! קיבלת כוכב, קבל את חות דעת מהמורה מאוחר יותר');
}
 
  return (
    <>
    <div className="card">
    <div className="text-bg-danger p-3">{writingObject?.question}
    </div>
</div>
    <form ref={form} onSubmit={sendEmail}>
     
     <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label"></label>
  <input type="email" className="form-control" id="exampleFormControlInput1" value={user.email} name="user_email"/>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control"  onChange={e => setText(e.target.value)} name="message" value={text} rows={11}></textarea>
</div>
<button type="submit" className="btn btn-danger">send for your teacher</button>
     
   </form>
   </>
 );
};

export default Writing;


