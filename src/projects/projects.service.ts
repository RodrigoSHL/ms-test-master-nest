import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundError, retry } from 'rxjs';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './entities/project.entity';
import { ProjectsRepository } from './projects.repository';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(ProjectsRepository)
    private projectRepository : ProjectsRepository
  ) {}

  async create(createProjectDto: CreateProjectDto) : Promise<Project> {
    const {name, shortName, hours, complete} = createProjectDto;

    const project = this.projectRepository.create({
      name,
      shortName,
      hours,
      complete
    })

    await this.projectRepository.save(project)
    return project;
  }


  findAll() {
    return `This action returns all projects`;
  }

  async getProjectById(id: string) {
    const found = await this.projectRepository.findOne(id);
    if(!found){
      throw new NotFoundException(`No se encontró proyecto con ID "${id}"`);
    }
    return found;
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
