import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

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
      port: 3306,
      type: 'mysql',
      database: 'todo',
      entities: [Todo],
      synchronize: true,
      host: 'localhost',
      username: 'root',
      password: 'password',
    }),
  ],
})
export class AppModule {}
