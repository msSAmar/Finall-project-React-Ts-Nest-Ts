import React, { useEffect, useRef,useState } from 'react';
import { Navigate, NavigateFunction, useNavigate } from 'react-router-dom';
import { fetchAssiment, fetchQuiz } from '../../api/assiment';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import { Button,  FormControlLabel, Radio } from '@mui/material';
import { Assiment } from '../../classes/assiment';
import './assiment.css';
import { useSelector } from 'react-redux';
import { User } from '../../classes/user';
///////////////////////////////////////
const Vocabulary = () => {
  const [rcObject, setRcObject] = useState<Assiment[]>([]); 
  const [showRC, setRC] = useState(false);
  const [level, setLevel] = useState(0);
  const [levelRc, setLevelRc] = useState("");
  const user: User = useSelector((state: any) => state.user);
  const navigate: NavigateFunction = useNavigate();
  useEffect(() => {
    fetchAll();
  }, []);

async function fetchAll():Promise<void>{
  const objects = await fetchQuiz();
  const part3Object = objects.filter((obj:any) => obj.part === 3);
  const levelObject = part3Object.filter((obj:any) => obj.level === 0);
  setRcObject(levelObject);
  if(level==0){
    setLevelRc("/src/images/נמוך.png");
  }
  else{
    if(level==1)
    setLevelRc("/src/images/בינוני.png");
    else
       setLevelRc("/src/images/גבוהה.png")
  }
  console.log(rcObject);
}
 
const handleSelectAnswer = (index: number,answer:string) => {
  const updateVObjects= [...rcObject];
  updateVObjects[index-31].selectAnswer=answer;
  setRcObject(updateVObjects);
  console.log(rcObject);
 
};

const  calculate = () => {
  localStorage.setItem('mark', '0');
  let myVariable = Number(localStorage.getItem('mark'));
  rcObject.forEach((item) => {
  if(item.answers[item.correctAnswerIndex]===item.selectAnswer){
      myVariable += item.points; 
  }
 })
 localStorage.setItem('mark', String(myVariable));
 const updatedVariable = localStorage.getItem('mark');
 console.log(updatedVariable);
 if(Number(updatedVariable)>=30){
   fetchAssiment(Number(user._id),1);
  alert('הצלחת! קיבלת כוכב');
 }
 else{
  alert('נכשלת, לא נורא נסה שוב מאוחר יותר')
 }
}
const rc=()=>{
  setRC(!showRC)
}

const final=()=>{
  calculate();
  navigate('/', { replace: true });
}
  return(
    <div>
      <h1>ברוכים הבאים למשימת הבנת הנקרא</h1>
      <Button size="large" color="secondary" onClick={final} >finish</Button>
    <Button size="large" color="secondary" onClick={rc} >Reading Comprehension|לקריאת הטקסט</Button>
    {showRC&&(<img src={levelRc} alt="RC" width={"500px"}/>)}
    <div >{rcObject.map((obj, indexObject) => (
      <div key={obj._id}>
        
         <FormLabel id="demo-controlled-radio-buttons-group">{obj.question}</FormLabel>
        {obj.answers.map((answer, index) => (
          <div key={index}>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name={`answer${indexObject}`}
              value={obj.selectAnswer}
              onChange={(event) => handleSelectAnswer(Number(obj._id),event.target.value)}
              
           >
            <FormControlLabel key={index} value={answer} control={<Radio />} label={answer} />
            </RadioGroup>
        
          </div>
        ))}
      </div>
      
    ))}
    
   </div>

   </div>
  );
};

export default Vocabulary;


