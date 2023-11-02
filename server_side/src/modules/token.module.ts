import { Module } from '@nestjs/common';
import { ReadingComprehensionService } from '../Services/reading-comprehension.service';
import { MongooseModule } from '@nestjs/mongoose';
import {  MessageForm ,MessageFormSchema} from '../schemas/messageForm.schema';
import { JwtModule } from '@nestjs/jwt';
import { TokenController } from '../controllers/token.controller';

import { APP_GUARD } from '@nestjs/core';
import { AuthService } from 'src/Services/auth.service';
import { StudentService } from 'src/Services/student.service';
import { UsersModule } from 'src/modules/users.module';

@Module({
  
    controllers: [TokenController],
    providers: [AuthService]
 
  
})
export class TokenModule {}
