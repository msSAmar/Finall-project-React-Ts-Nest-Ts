import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { max } from 'rxjs';
import { EnglishText } from 'src/classes/englishText';
import { User } from 'src/classes/user';

@Injectable()
export class WritingService {
  constructor(@InjectModel(EnglishText.name) private readonly EnglishTextModule: Model<EnglishText>) {}

  async addEnglishText(text:string,user:User): Promise<EnglishText>{
    let max=0;
    (await  this.findAll()).forEach(element => {
       if (parseInt(element._id)>max)
         max=parseInt(element._id);
     });
     max++;
    const Text: EnglishText =new EnglishText(user,text);
    Text._id = max.toString();
   
    console.log(Text.text);
    const createEnglishText = await this.EnglishTextModule.create(Text);
    return createEnglishText;
  }
  async findAll(): Promise<EnglishText[]>  {
    return this.EnglishTextModule.find().exec();
  }
 
}
