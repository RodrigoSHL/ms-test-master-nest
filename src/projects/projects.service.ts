import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private projectRepository : Repository<Project>
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


  async getAll() : Promise<Project[]>{
    const found = await this.projectRepository.find();
    if(!found){
      throw new NotFoundException(`Not projects found`);
    }
    return found;
  }

  async getProjectById(id: string) : Promise<Project> {
    const found = await this.projectRepository.findOne(id);
    if(!found){
      throw new NotFoundException(`Not found project with ID "${id}"`);
    }
    return found;
  }

  async update(id: string, updateProjectDto: UpdateProjectDto) : Promise<Project> {
    const project = await this.getProjectById(id);
    this.projectRepository.merge(project, updateProjectDto)
    await this.projectRepository.save(project);
    return project;
  }

  async deleteProject(id: string): Promise<void> { 
    const result = await this.projectRepository.delete(id);
    if(result.affected === 0) {
      throw new NotFoundException(`Project with ID #${id} not found`)
    }
  }
}
