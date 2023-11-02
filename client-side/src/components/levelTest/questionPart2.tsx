import React, { useEffect, useRef,useState } from 'react';
import { fetchLevelTest } from '../../api/levelTest';
interface QuizItem {
  _id: number;
  correctAnswerIndex: number;
  selectedAnswer: string;
}
interface ObjectItem {
  _id: number;
  question: string;
  answers: string[];
  correctAnswerIndex: number;
  part: number;
}
const QuestionPart2 = () => {
  const [quizItems, setQuizItems] = useState<QuizItem[]>([{_id:0,correctAnswerIndex:0,selectedAnswer:"0"},{_id:0,correctAnswerIndex:0,selectedAnswer:"0"},
  {_id:0,correctAnswerIndex:0,selectedAnswer:"0"},{_id:0,correctAnswerIndex:0,selectedAnswer:"0"}
,{_id:0,correctAnswerIndex:0,selectedAnswer:"0"},{_id:0,correctAnswerIndex:0,selectedAnswer:"0"},
{_id:0,correctAnswerIndex:0,selectedAnswer:"0"},{_id:0,correctAnswerIndex:0,selectedAnswer:"0"}]);
  const [part2Objects, setpart2Objects] = useState<ObjectItem[]>([]);
  useEffect(() => {
    fetchPart2Objects();
  }, []);
  async function fetchPart2Objects(): Promise<void> {    
    const objects = await fetchLevelTest();
    const part2Objects = objects.filter((obj:any) => obj.part === 2);
   console.log(part2Objects);
    setpart2Objects(part2Objects);
  } 
 
  const handleSelectAnswer2 = (index: number, correctAnswer: number, selectedAnswer: string) => {
    console.log(index, correctAnswer, selectedAnswer);
    
    setQuizItems(pre => {
      const updatedItems2 = [...pre];
      updatedItems2[index] = {
        _id:index,
        correctAnswerIndex: correctAnswer,
        selectedAnswer: selectedAnswer
      };
      return updatedItems2;
    });
  };
  
 
      
          
    return (
      <div id="objects-container">
      {part2Objects.map((obj, indexObject) => (
        <div key={obj._id}>
          <div>{obj.question}</div>
          {obj.answers.map((answer, index) => (
            <div key={index}>
              <input
                type="radio"
                name={`answer${indexObject}`}
                value={answer}
                onChange={() => handleSelectAnswer2(obj._id, obj.correctAnswerIndex, answer)}
              />
              <span>{answer}</span>
            </div>
          ))}
        </div>
      ))}
     {quizItems.map((item, index) =>(
      <div key={index}>
      <div>{item._id}</div>
      <div>{item.correctAnswerIndex}</div>
      <div>{item.selectedAnswer}</div>
      </div>
     ))}
    </div>
     );
    };
    
    export default QuestionPart2;