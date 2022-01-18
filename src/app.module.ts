import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectsModule } from './projects/projects.module';
import { ClientsModule } from './clients/clients.module';

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

  }), ProjectsModule, ClientsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
