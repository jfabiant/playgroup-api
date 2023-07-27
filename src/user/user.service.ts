import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
    
    private readonly users:User[]=[
        {
            id: 1,
            email: "j@test.com",
            password: "j123g"
        },
        {
            id: 2,
            email: "k@test.com",
            password: "k222p"
        }
    ]

    async findOne(email:string):Promise<User>{
        return this.users.find(u => u.email === email);
    }

}
