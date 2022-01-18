import { Client } from "src/clients/entities/client.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @ManyToOne(() => Client, (client) => client.projects)
    @JoinColumn({name: 'clientId'})
    client: Client
}
