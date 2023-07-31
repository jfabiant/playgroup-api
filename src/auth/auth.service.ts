import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { SignInDto } from './dto/signin.dto';
import { SignUpDto } from './dto/signup.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(signInDto: SignInDto): Promise<any> {
    const user: User = await this.userService.findOne(signInDto.email);
    if (user?.password !== signInDto.password) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
      id: user.id,
      email: user.email,
    };
  }

  async signUp(signUpDto: SignUpDto) {
    const user = new CreateUserDto();
    user.email = signUpDto.email
    user.name = signUpDto.name
    user.password = signUpDto.password

    console.log(user);

    this.userService.save(user);
    return {
      "message": "User created successfully"
    }
  }

  async getProfile() {
    return "Hi, I Should Be Private";
  }
}
