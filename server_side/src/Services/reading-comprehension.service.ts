import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { max } from 'rxjs';
import { MessageForm } from 'src/classes/messageForm';
import { User } from 'src/classes/user';

@Injectable()
export class ReadingComprehensionService {
  constructor(@InjectModel(MessageForm.name) private readonly MessageFormModel: Model<MessageForm>) {}

  async addMessage(text:string,like:number,user:User): Promise<MessageForm> {
    let max=0;
    (await  this.findAll()).forEach(element => {
       if (parseInt(element._id)>max)
         max=parseInt(element._id);
     });
     max++;
    
    // const user:User=new User("11","xsj","05284512545","sahbdh@gnan.com","123455Asq!");
    const Ms: MessageForm =new MessageForm(user,text,like);
    Ms._id = max.toString();
   
    console.log(Ms.text);
    const createMessage = await this.MessageFormModel.create(Ms);
    return createMessage;
  }
  async findAll(): Promise<User[]> {
    return this.MessageFormModel.find().exec();
  }
  async getMessage(): Promise<MessageForm []>{
    return this.MessageFormModel.find().exec();
  }
}
