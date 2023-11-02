import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    Post,
    Put,
    Request,
    Res,
    UnauthorizedException,
    ValidationPipe,
    
  } from '@nestjs/common';
  import { AuthService } from '../Services/auth.service';
  import { Public } from '../decorator/public.decorator';
  import {StudentService } from '../Services/student.service';
  import { Student } from '../classes/student';
  
  /////////////////הרשאות גישה לאתר signin signup
  @Controller('student')
  export class StudentController {
    constructor(private authService: AuthService,private studentService: StudentService) {}
  
    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('signIn')
     async signIn(@Body() signInDto: Record<string, any>,) {
      const user = await this.studentService.findByEmail(signInDto.email);
      if (user?.password !== signInDto.password) {
        throw new UnauthorizedException();
      }
      return this.authService.getToken(signInDto.email, signInDto.password);
  
    }
    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('signUp')
   async signUp(@Body() Student:any) {
    const userPassword = await this.studentService.findByPassword(Student.password);
    const userEmail = await this.studentService.findByEmail(Student.email);
    console.log(userEmail, userPassword);
    if (userPassword === null && userEmail === null) {
      let max=0;
     (await  this.studentService.findAll()).forEach(element => {
        if (parseInt(element._id)>max)
          max=parseInt(element._id);
      });
      max++;
      Student._id = max.toString();
      Student.stars=0;
      Student.level=0;
      this.studentService.create(Student);
    }
     else {
        throw new UnauthorizedException();
     } 
      return this.authService.getToken(Student.email,Student.password);
    }
    @Public()
    @HttpCode(HttpStatus.OK)
    @Put(':id')
   async level(@Body() Level:number, @Param('id') id?: string) {
    
    return this.studentService.updateLevel(id, Level);
    } 
    
  }
  