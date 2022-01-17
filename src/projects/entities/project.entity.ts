import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Project {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    shortName: string;

    @Column()
    hours: number;

    @Column({default:false})
    complete: boolean;
}
