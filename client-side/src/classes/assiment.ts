import { Test } from "./test";

export class Assiment extends Test {
    level: number;
    constructor(
        _id: number,
        points: number,
        question: string,
        answers: string[],
        correctAnswerIndex: number,
        part:number,
        selectAnswer:string,
        level: number
        ) {
            super(_id,points,question,answers,correctAnswerIndex,part,selectAnswer);
            this.level = level;  
    } 
}