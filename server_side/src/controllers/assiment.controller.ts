import {
    Body,Controller,Get,HttpCode,HttpStatus,Post,Request,ValidationPipe,UsePipes  
  } from '@nestjs/common';
  import { Public } from '../decorator/public.decorator';
  import {AssimentService } from '../Services/assiment.service';
import { Assiment } from 'src/classes/assiment';

  
  @Controller('Assiment')
  export class AssimentController {
    constructor(private AssimentService: AssimentService) {}
  ////////////////הוספת question למבחן
    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('post')
    @UsePipes(new ValidationPipe({ transform: true }))
    ///////באג ! לא מקבל מסוג test
     async add(@Body() test: any): Promise<Assiment> {
      console.log(test)
      return this.AssimentService.create(test);
  
    }
    ///////////הצגת השאלות
    @Public()
    @HttpCode(HttpStatus.OK)
    @Get('get')
     async get() {
      return this.AssimentService.findAll();
  
    }
   
  }
  