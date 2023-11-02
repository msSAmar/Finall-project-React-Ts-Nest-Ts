import { Module } from '@nestjs/common';
import { AuthService } from '../Services/auth.service';
import { UsersModule } from './users.module';
import { JwtModule } from '@nestjs/jwt';
import { StudentController } from '../controllers/student.controller';
import { TokenController } from '../controllers/token.controller';
import { APP_GUARD } from '@nestjs/core';
import { StudentService } from 'src/Services/student.service';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
     
      signOptions: { expiresIn: '10m' },
    }),
  ],
  providers: [
    AuthService,
   
  ],
 
  controllers: [StudentController],

  exports: [AuthService],
})
export class AuthModule {}
