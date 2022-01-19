import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectsModule } from './projects/projects.module';
import { ClientsModule } from './clients/clients.module';
import { StagesModule } from './stages/stages.module';

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

  }), ProjectsModule, ClientsModule, StagesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
