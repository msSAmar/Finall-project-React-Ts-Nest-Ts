import {
    Body,Controller,Get,HttpCode,HttpStatus,Post,Request,ValidationPipe,UsePipes  
  } from '@nestjs/common';
  import { Public } from '../decorator/public.decorator';
  import {TestService } from '../Services/test.service';
  import {Test } from '../classes/test';

  
  @Controller('Test')
  export class TestController {
    constructor(private TestService: TestService) {}
  ////////////////הוספת question למבחן
    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('post')
    @UsePipes(new ValidationPipe({ transform: true }))
    ///////באג ! לא מקבל מסוג test
     async add(@Body() test: any): Promise<Test> {
      console.log(test)
      return this.TestService.create(test);
  
    }
    ///////////הצגת השאלות
    @Public()
    @HttpCode(HttpStatus.OK)
    @Get('get')
     async get() {
      return this.TestService.findAll();
  
    }
   
  }
  