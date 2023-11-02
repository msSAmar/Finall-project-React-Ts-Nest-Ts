import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { User } from 'src/classes/user';



export type UserDocument = HydratedDocument<MessageForm>;

@Schema()
export class MessageForm {
  @Prop()
  _id: string;
  
  @Prop()
  user: User;

  @Prop()
  like: number;

  @Prop()
  text: string;

  @Prop()
  time: number;

 
  
}

export const MessageFormSchema = SchemaFactory.createForClass(MessageForm);
