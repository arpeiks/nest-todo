import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { Todo } from './todo.entity';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';

@Module({
  providers: [TodoService],
  controllers: [TodoController],
  imports: [TypeOrmModule.forFeature([Todo])],
})
export class TodoModule {}
