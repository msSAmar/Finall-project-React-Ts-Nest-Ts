import React, { useEffect, useRef,useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { fetchAssiment, fetchQuiz } from '../../api/assiment';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import { useDispatch, useSelector } from 'react-redux';
import FormLabel from '@mui/material/FormLabel';
import { Button, FormControl, FormControlLabel, Radio } from '@mui/material';
import { User } from '../../classes/user';
import { Assiment } from '../../classes/assiment';
///////////////////////////////////////
const Vocabulary = () => {
  const [vocabularyObject, setVocabularyObject] = useState<Assiment[]>([]); 
  const navigate: NavigateFunction = useNavigate();
  const user: User = useSelector((state: any) => state.user);
  useEffect(() => {
    fetchAll();
  }, []);
// Function to fetch objects of part=1 and render them
async function fetchAll():Promise<void>{
  const objects = await fetchQuiz();
  const part1Object = objects.filter((obj:any) => obj.part === 2);
  const levelObject = part1Object.filter((obj:any) => obj.level === 0);
  setVocabularyObject(levelObject);
  console.log(vocabularyObject);
}

const handleSelectAnswer = (index: number,answer:string) => {
  const updateVObjects= [...vocabularyObject];
  updateVObjects[index-16].selectAnswer=answer;
  setVocabularyObject(updateVObjects);
  console.log(vocabularyObject);
};

const  calculate = () => {
  localStorage.setItem('mark', '0');
  let myVariable = Number(localStorage.getItem('mark'));
  vocabularyObject.forEach((item) => {
  if(item.answers[item.correctAnswerIndex]===item.selectAnswer){
      myVariable += item.points; 
  }
 })
 localStorage.setItem('mark', String(myVariable));
 const updatedVariable = localStorage.getItem('mark');
 console.log(updatedVariable);
 if(Number(updatedVariable)>=20){
   fetchAssiment(Number(user._id),1);
  alert('הצלחת! קיבלת כוכב');
 }
 else{
  alert('נכשלת, לא נורא נסה שוב מאוחר יותר')
 }
}

const final=()=>{
  calculate();
  navigate('/', { replace: true });
}
  return(
    <div><div>{vocabularyObject.map((obj, indexObject) => (
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
    <Button size="large" color="secondary" onClick={final} >finish</Button></div>  
  </div>
  );
};

export default Vocabulary;


