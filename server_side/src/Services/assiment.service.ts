import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Assiment } from '../classes/assiment';


@Injectable()
export class AssimentService {
  constructor(@InjectModel(Assiment.name) private readonly AssimentModel: Model<Assiment>) {}

  async create(Assiment: Assiment): Promise<Assiment> {
    console.log(Assiment);
    let max=0;
    (await  this.findAll()).forEach(element => {
       if (parseInt(element._id)>max)
         max=parseInt(element._id);
     });
     max++;
    
   
    //const Qs: Test =new Test(question.points,question.question,question.answers,question.correctAnswerIndex,question.part);
    Assiment._id = max.toString();
  
    const createdQuestion = await this.AssimentModel.create(Assiment);
    return createdQuestion;
  }


  async findAll(): Promise<Assiment[]> {
    return this.AssimentModel.find().exec();
  }

  
  async findById(TestId: string): Promise<Assiment> {
    return this.AssimentModel.findOne({_Id : TestId }).exec();
  }

 
  async delete(id: string) {
    const deletedQuestion = await this.AssimentModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedQuestion;
  }
}
