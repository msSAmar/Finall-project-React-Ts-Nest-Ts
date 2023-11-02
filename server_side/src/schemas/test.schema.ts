import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';



export type TestDocument = HydratedDocument<Test>;

@Schema()
export class Test {
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
  
}

export const TestSchema = SchemaFactory.createForClass(Test);
