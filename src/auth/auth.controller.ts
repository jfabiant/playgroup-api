import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private authService:AuthService){}

    @Post("signin")
    @HttpCode(HttpStatus.OK)
    async signIn(@Body() signInDto:Record<string,any>){
        return this.authService.signIn(signInDto.email, signInDto.password);
    }

}
