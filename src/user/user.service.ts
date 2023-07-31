import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>){}

    async findOne(email:string):Promise<User>{
        return this.userRepository.findOneBy({
            email:email
        })
    }

    async save(createUserDto: CreateUserDto){
        const user = new User();
        user.name = createUserDto.name
        user.email = createUserDto.email
        user.password = createUserDto.password
        this.userRepository.save(user);
    }

}
