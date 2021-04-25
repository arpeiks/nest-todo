import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import config from './config';
import { Todo } from './todo/todo.entity';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { AppController } from './app.controller';
@Module({
  providers: [AppService],
  controllers: [AppController],
  imports: [
    TodoModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      entities: [Todo],
      port: config.database.port,
      host: config.database.host,
      database: config.database.name,
      username: config.database.user,
      password: config.database.password,
    }),
  ],
})
export class AppModule {}
