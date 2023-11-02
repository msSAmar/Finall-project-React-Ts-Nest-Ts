import { Injectable, UnauthorizedException } from '@nestjs/common';
//import { StudentService } from '../Services/student.service';
import { JwtService } from '@nestjs/jwt';
import { Student } from '../classes/student';
import { createCipheriv, randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';


@Injectable()
export class AuthService {
  constructor(
    
    private jwtService: JwtService
  ) { }
//////////////יצירת תוקן למשתמש 
  async getToken(username, pass) {
    const payload = { username: username, sub: pass };
    const token = await this.jwtService.signAsync(payload, { secret: 'your-secret-key' });
  
    return {
      access_token: token,
    };
    
  }
 
  //////////פיענוח token 
  async decryptToken(token: string): Promise<{ username: string; sub: string }> {
    try {
      const decodedToken: any = await this.jwtService.verifyAsync(token);
      const { username, sub } = decodedToken;
      return { username, sub };
    } catch (error) {
      // Handle any potential errors during decryption
      throw new Error('Invalid token');
    }
  }
 
}
