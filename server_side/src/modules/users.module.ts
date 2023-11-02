import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
//import { UsersController } from './users.controller';
import { StudentService } from '../Services/student.service';
import { User, UserSchema } from '../schemas/user.schema';
import { APP_GUARD } from '@nestjs/core';


@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
 // controllers: [UsersController],
  providers: [
   
    StudentService,

  ],
 
  exports: [StudentService]
})
export class UsersModule {}
