import { Module } from '@nestjs/common';
import { ReadingComprehensionService } from '../Services/reading-comprehension.service';
import { MongooseModule } from '@nestjs/mongoose';
import {  MessageForm ,MessageFormSchema} from '../schemas/messageForm.schema';
import { ReadingComprehensionController } from '../controllers/reading-comprehension.controller';



@Module({
  imports: [MongooseModule.forFeature([{ name: MessageForm.name, schema: MessageFormSchema }])],
  providers: [
    ReadingComprehensionService,
   
  ],
 
  controllers: [ReadingComprehensionController],
  exports: [ReadingComprehensionService],
})
export class ReadingComprehensionModule {}
