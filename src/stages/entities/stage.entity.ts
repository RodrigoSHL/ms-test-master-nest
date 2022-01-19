import { Project } from "../../projects/entities/project.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Stage {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @ManyToMany(() => Project, (project) => project.stages)
    @JoinTable({
        name: 'relProjectCategory',
        joinColumn: {
            name: 'projectId',
        },
        inverseJoinColumn: {
            name: 'taskId'
        }
    })
    projects: Project[]
}
