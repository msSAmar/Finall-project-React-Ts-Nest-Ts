import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';



export type AssimentDocument = HydratedDocument<Assiment>;

@Schema()
export class Assiment {
  @Prop()
  _id: string;
  
  @Prop()
  points: number;


  @Prop()
  question: string;

  @Prop()
  answers: string[];
 

  @Prop()
  correctAnswerIndex: number;
  
  @Prop()
  part: number;

  @Prop()
  level: number;
  
}

export const AssimentSchema = SchemaFactory.createForClass(Assiment);
