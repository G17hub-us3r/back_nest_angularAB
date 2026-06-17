import { Injectable } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  login(credentials: LoginAuthDto) {
    const payload = credentials;

    const token = this.jwtService.sign(payload);
    return { token: token };
  }
}
