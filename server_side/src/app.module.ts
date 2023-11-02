import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './modules/users.module';
import { AuthModule } from './modules/auth.module';
import { ReadingComprehensionModule } from './modules/readingComprehension.module';
import { TokenModule } from './modules/token.module';
import { WritingModule } from './modules/writing.module';
import { TestModule } from './modules/test.module';
import { AssimentModule } from './modules/assiment.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/server'),
    UsersModule,
    AuthModule,
    ReadingComprehensionModule,
    TokenModule,
    WritingModule,
    TestModule,
    AssimentModule
  
    
  ],

},
)
export class AppModule {}
