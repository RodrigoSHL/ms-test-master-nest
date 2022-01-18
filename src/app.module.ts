import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'admin',
    password: 'adminpassword',
    database: 'test-master-dev',
    autoLoadEntities: true,
    synchronize: true

  }), TasksModule, ProjectsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
