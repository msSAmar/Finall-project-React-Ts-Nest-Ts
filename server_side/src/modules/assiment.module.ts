import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AssimentController } from './../controllers/assiment.controller';
import { AssimentService } from '../Services/assiment.service';
import { Assiment, AssimentSchema } from '../schemas/assiment.schema';
import { APP_GUARD } from '@nestjs/core';


@Module({
  imports: [MongooseModule.forFeature([{ name: Assiment.name, schema: AssimentSchema }])],
 // controllers: [UsersController],
  providers: [
   
    AssimentService,

  ],
  controllers: [AssimentController],
  exports: [AssimentService]
})
export class AssimentModule {}
