import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { SignInDto } from './dto/signin.dto';
import { Public } from 'src/common/decorators/public.decorator';

@Controller('auth')
export class AuthController {

    constructor(private authService:AuthService){}

    @Post("signin")
    @Public()
    @HttpCode(HttpStatus.OK)
    async signIn(@Body() signInDto:SignInDto){
        return this.authService.signIn(signInDto);
    }

    @Post("signup")
    @Public()
    @HttpCode(HttpStatus.ACCEPTED)
    async signUp(@Body() signUpDto:SignUpDto){
        return this.authService.signUp(signUpDto);
    }

    @Get("profile")
    @HttpCode(HttpStatus.ACCEPTED)
    async getProfile(){
        return this.authService.getProfile();
    }

}
