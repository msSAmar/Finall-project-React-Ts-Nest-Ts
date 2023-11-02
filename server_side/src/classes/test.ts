export class Test {
    _id?: string;
    points: number;
    question:string;
    answers:string[];
    correctAnswerIndex:number;
    part:number;
    constructor(
        points: number,
        question: string,
        answers: string[],
        correctAnswerIndex: number,
        part:number
        ) {
          this.points = points;
          this.question=question; 
          this.answers = answers;
          this.correctAnswerIndex=correctAnswerIndex;
          this.part=part;  
    } 
}