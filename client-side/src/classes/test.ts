export class Test {
    _id: number;
    points: number;
    question:string;
    answers:string[];
    correctAnswerIndex:number;
    part:number;
    selectAnswer:string;
    constructor(
        _id:number,
        points: number,
        question: string,
        answers: string[],
        correctAnswerIndex: number,
        part:number,
        selectAnswer:string
        ) {
            this._id=_id;
          this.points = points;
          this.question=question; 
          this.answers = answers;
          this.correctAnswerIndex=correctAnswerIndex;
          this.part=part; 
          this.selectAnswer=selectAnswer; 
    } 
}