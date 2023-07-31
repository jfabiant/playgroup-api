import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;
    @Column()
    description:string;
    @Column()
    image:string;
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt:Date;
    @Column({type: "datetime", nullable: true})
    updatedAt:Date;
    
}
