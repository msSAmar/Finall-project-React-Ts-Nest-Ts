import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestSchema } from '../schemas/test.schema';
import { TestService } from 'src/Services/test.service';
import { TestController } from 'src/controllers/test.controller';



@Module({
  imports: [MongooseModule.forFeature([{ name: Test.name, schema: TestSchema }])],

  providers: [
   TestService
    ,

  ],
  controllers: [TestController],
  exports: [TestService],
})
export class TestModule {}
