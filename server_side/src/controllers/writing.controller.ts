import {
    Body,Controller,Get,HttpCode,HttpStatus,Post,Request,ValidationPipe,
    
  } from '@nestjs/common';
  import { Public } from '../decorator/public.decorator';
  import {WritingService } from '../Services/writing.service';

////////////הוספת קטע טקסט לדאתה בייס
  
  
  @Controller('writing')
  export class WritingController {
    constructor(private WritingService: WritingService) {}
  
    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('add')
     async add(@Body() Text: any) {
      return this.WritingService.addEnglishText(Text.text
        ,Text.user);
  
    }
    
   
  }
  