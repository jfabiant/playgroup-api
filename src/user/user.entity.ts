import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export enum UserStatus {
    PENDING = "PENDING",
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE"
}

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    email:string;
    @Column()
    password:string;
    @Column()
    name:string;
    @Column({
        default: UserStatus.PENDING
    })
    status: UserStatus

}