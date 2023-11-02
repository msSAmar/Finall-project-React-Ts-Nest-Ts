import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {  EnglishText ,EnglishTextSchema} from '../schemas/writing.schema';
import { JwtModule } from '@nestjs/jwt';
import { WritingController } from '../controllers/writing.controller';
import { APP_GUARD } from '@nestjs/core';
import { WritingService } from 'src/Services/writing.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: EnglishText.name, schema: EnglishTextSchema }])],
  providers: [
    WritingService,
   
  ],
 
  controllers: [WritingController],
  exports: [WritingService],
})
export class WritingModule {}
