import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(private userService:UserService,private jwtService:JwtService){}

    async signIn(email: string, pass: string): Promise<any> {
        const user:User = await this.userService.findOne(email);
        if (user?.password !== pass) {
          throw new UnauthorizedException();
        }
        const payload = { sub: user.id, email: user.email };
        return {
            access_token: await this.jwtService.signAsync(payload),
            id: user.id,
            email: user.email
          };
      }

}
