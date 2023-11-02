import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Request,
    ValidationPipe,
    
  } from '@nestjs/common';
  import { AuthService } from '../Services/auth.service';
  import { Public } from '../decorator/public.decorator';
  import {ReadingComprehensionService } from '../Services/reading-comprehension.service';
/////////////////פוסטים לקטע הבנת הנקרא
  
  @Controller('rc')
  export class ReadingComprehensionController {
    constructor(private ReadingComprehensionService: ReadingComprehensionService) {}
  ////////////////הוספת Post לפורום
    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('add')
     async add(@Body() Message: any) {
      return this.ReadingComprehensionService.addMessage(Message.text,Message.like,Message.user);
  
    }
    ///////////שליפת ה postים
    @Public()
    @HttpCode(HttpStatus.OK)
    @Get('get')
     async get() {
      return this.ReadingComprehensionService.getMessage();
  
    }
   
  }
  