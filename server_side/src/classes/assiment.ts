import { Test } from "./test";

export class Assiment extends Test {
    level: number;
    constructor(
        points: number,
        question: string,
        answers: string[],
        correctAnswerIndex: number,
        part:number,
        level: number
        ) {
            super(points,question,answers,correctAnswerIndex,part);
            this.level = level;  
    } 
}