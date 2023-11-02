import React, { useEffect, useRef,useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { fetchLevelTest } from '../../api/levelTest';
import { fetchLevel } from '../../api/user';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import { useDispatch, useSelector } from 'react-redux';
import FormLabel from '@mui/material/FormLabel';
import { Button, FormControl, FormControlLabel, Radio } from '@mui/material';
import { User } from '../../classes/user';
import { Test } from '../../classes/test';

interface QuizItem {
  _id: number;
  correctAnswerIndex: number;
  selectedAnswer: number;
}
// interface ObjectItem {
//   _id: number;
//   question: string;
//   answers: string[];
//   correctAnswerIndex: number;
//   part: number;
// }
///////////////////////////////////////
const QuestionPart1 = () => {
  const initialQuizItems: QuizItem[] = Array.from({ length: 20 }, (_, index) => ({
    _id: index,
    correctAnswerIndex: -1,
    selectedAnswer:-1,
  }));
  const [quizItems, setQuizItems] = useState<QuizItem[]>(initialQuizItems);
  const [part1Objects, setpart1Objects] = useState<Test[]>([]);
  const [part2Objects, setpart2Objects] = useState<Test[]>([]);
  const [part3Objects, setpart3Objects] = useState<Test[]>([]);
  const [show2Object, setshow2Object] = useState(false); 
  const [show1Object, setshow1Object] = useState(false); 
  const [show3Object, setshow3Object] = useState(false);
  const [showRC, setRC] = useState(false);
  const [allObject, setObject] = useState<Test[]>([]); 
  const [mark, setMark] = useState(0); 
  const [level, setLevel] = useState(0); 
  const[count,setcount] = useState(0);
  const [special, setspecial] = useState(0);
  const navigate: NavigateFunction = useNavigate();
  const user: User = useSelector((state: any) => state.user);
  useEffect(() => {

    fetchPart1Objects()
  }, []);
//  fetchPart1Objects(); 


// Function to fetch objects of part=1 and render them
async function fetchPart1Objects(): Promise<void> {
  const objects = await fetchLevelTest();
  //setObject(objects);
  
  const part1Object = objects.filter((obj:any) => obj.part === 1);
  setpart1Objects(part1Object);
  setshow1Object(!show1Object)
  setObject(objects);
  console.log(allObject);
  console.log(part1Objects,part1Object);
  
  
}
async function fetchPart2Objects(): Promise<void> { 
  //const objects = await fetchLevelTest();   
  const part2Objects = allObject.filter((obj:any) => obj.part === 2);
 console.log(part2Objects);
  setpart2Objects(part2Objects);
  setshow2Object(!show2Object);
  setshow1Object(!show1Object);
 
} 
async function fetchPart3Objects(): Promise<void> {  
  //const objects = await fetchLevelTest();  
  const part3Objects = allObject.filter((obj:any) => obj.part === 3);
 console.log(part3Objects);
  setpart3Objects(part3Objects);
  setshow2Object(!show2Object);
  setshow1Object(show1Object);
  setshow3Object(!show3Object);
 
} 
const handleSelectAnswer = (index: number,answer:string, correctAnswer: number, selectedAnswer: number,part:number) => {


  const updatedQuizData=[...allObject];
  updatedQuizData[index-1].selectAnswer=answer;
  setObject(updatedQuizData);

  // else{
  //   if(part===2){
  //     const updatedQuizData = [...part2Objects];
  // updatedQuizData[count].selectAnswer = answer;
  // setpart2Objects(updatedQuizData);
  // setcount(pre=>pre+1);
  // console.log(part2Objects);
  //   }
  //   else{
  //     const updatedQuizData = [...part3Objects];
  // updatedQuizData[index].selectAnswer = answer;
  // setpart3Objects(updatedQuizData);
  // console.log(part3Objects);
  //   }
  // }
  setQuizItems(prevItems => {
    const updatedItems = [...prevItems];

    updatedItems[index] = {
      _id:index,
      correctAnswerIndex: correctAnswer,
      selectedAnswer: selectedAnswer
    };
    
    return updatedItems;
  });
};

const  calculate = () => {
  localStorage.setItem('mark', '0');
  let myVariable = Number(localStorage.getItem('mark'));
 allObject.forEach((item) => {
  if(item.answers[item.correctAnswerIndex]===item.selectAnswer)
      myVariable += 5;
 })
 localStorage.setItem('mark', String(myVariable));
 const updatedVariable = localStorage.getItem('mark');
 console.log(updatedVariable);
}
const readingComprehension=()=>{
  setRC(!showRC);
}
const setLevelByMark = () =>{
  const mark =Number( localStorage.getItem('myVariable'));
 if(mark>30) {
  setLevel(3);
 }
 else{
  if(mark<30&&mark>15){
    setLevel(2);
  }
  else{
    if(mark<15)
      setLevel(1);
  }
 }
}
const final=()=>{
  calculate();
  //const updatedVariable = localStorage.getItem('myVariable');
  //setLevelByMark();
  //console.log(updatedVariable,level);
  //fetchLevel(user._id,level);
  navigate('/', { replace: true });
}
  return (
    <div id="objects-container">
      {show2Object && ( <div>{part2Objects.map((obj, indexObject) => (
        <div key={obj._id}>
          <FormLabel id="demo-controlled-radio-buttons-group">{obj.question}</FormLabel>
          {obj.answers.map((answer, index) => (
            <div key={index}>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name={`answer${indexObject}`}
                value={obj.selectAnswer}
                onChange={ (event) => handleSelectAnswer(obj._id, event.target.value, obj.correctAnswerIndex, index,obj.part)}
             >
              <FormControlLabel  key={index} value={answer} control={<Radio />} label={answer} />
              </RadioGroup>
          
            </div>
          ))}
        </div>
      ))}<Button color="secondary"  onClick={fetchPart3Objects}>next</Button></div>)}
       {show1Object && (<div>{part1Objects.map((obj, indexObject) => (
        <div key={obj._id}>
          <FormLabel id="demo-controlled-radio-buttons-group">{obj.question}</FormLabel>
          {obj.answers.map((answer, index) => (
            <div key={index}>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name={`answer${indexObject}`}
                
                value={obj.selectAnswer}
                onChange={(event) => handleSelectAnswer(obj._id, event.target.value, obj.correctAnswerIndex, index,obj.part)}
             >
              <FormControlLabel   key={index}value={answer} control={<Radio />} label={answer} />
              </RadioGroup>
          
            </div>
          ))}
        </div>
        
      ))}<Button color="secondary"  onClick={fetchPart2Objects}>next</Button></div>)}
      {show3Object && (<div>{part3Objects.map((obj, indexObject) => (
        <div key={obj._id}>
          
           <FormLabel id="demo-controlled-radio-buttons-group">{obj.question}</FormLabel>
          {obj.answers.map((answer, index) => (
            <div key={index}>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name={`answer${indexObject}`}
                onChange={(event) => handleSelectAnswer(obj._id, event.target.value, obj.correctAnswerIndex, index,obj.part)}
                value={obj.selectAnswer}
             >
              <FormControlLabel
               key={index}
               value={answer}
               control={<Radio />}
               label={answer} />
              </RadioGroup>
          
            </div>
          ))}
        </div>
        
      ))}<Button size="large" color="secondary" onClick={readingComprehension} >reading comprehension</Button>
      
      <Button size="large" color="secondary" onClick={final} >finish</Button></div>)}
      {showRC&&(<img src={"/src/images/dearDiary.png"} alt="RC" width={"500px"}/>)}
     {/* {quizItems.map((item, index) =>(
      <div key={item._id}>
      <div>{item._id}</div>
      <div>{item.correctAnswerIndex}</div>
      <div>{item.selectedAnswer}</div>
      </div>
     ))} */}
    
 

     <div>{mark}</div>
    </div>
 );
};

export default QuestionPart1;


