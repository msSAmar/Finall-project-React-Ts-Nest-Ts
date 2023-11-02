import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Test } from '../classes/test';


@Injectable()
export class TestService {
  constructor(@InjectModel(Test.name) private readonly testModel: Model<Test>) {}

  async create(Test: Test): Promise<Test> {
    console.log(Test);
    let max=0;
    (await  this.findAll()).forEach(element => {
       if (parseInt(element._id)>max)
         max=parseInt(element._id);
     });
     max++;
    
   
    //const Qs: Test =new Test(question.points,question.question,question.answers,question.correctAnswerIndex,question.part);
    Test._id = max.toString();
  
    const createdQuestion = await this.testModel.create(Test);
    return createdQuestion;
  }


  async findAll(): Promise<Test[]> {
    return this.testModel.find().exec();
  }

  
  async findById(TestId: string): Promise<Test> {
    return this.testModel.findOne({_Id : TestId }).exec();
  }

 
  async delete(id: string) {
    const deletedQuestion = await this.testModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedQuestion;
  }
}
