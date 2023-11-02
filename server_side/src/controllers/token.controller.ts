import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Request,
    Res,
    ValidationPipe,
    
  } from '@nestjs/common';
  import { Public } from '../decorator/public.decorator';
import { AuthService } from '../Services/auth.service';
@Controller('token')
export class TokenController {
  constructor(private authService: AuthService) {}
//////////פיענוח התוקן
  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('decrypt')
  async decryptToken(@Body() token: Record<string, any>) {
    console.log('decryptToken', token.token);
    const decryptedToken = await this.authService.decryptToken(token.token);
    return decryptedToken;
  }
}