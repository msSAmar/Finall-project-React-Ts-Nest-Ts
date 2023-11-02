import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { User } from 'src/classes/user';



export type UserDocument = HydratedDocument<EnglishText>;

@Schema()
export class EnglishText {
  @Prop()
  _id: string;
  
  @Prop()
  user: User;


  @Prop()
  text: string;



 
  
}

export const EnglishTextSchema = SchemaFactory.createForClass(EnglishText);
