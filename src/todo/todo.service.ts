import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';

import { Todo } from './todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo) private todoRepository: Repository<Todo>,
  ) {}

  async create(data: CreateTodoDto): Promise<Todo> {
    return await this.todoRepository.save(data);
  }

  async update(id: string, data: UpdateTodoDto): Promise<Todo> {
    if (!(await this.findOne(id))) {
      throw new NotFoundException(`Todo with the id ${id} does not exist`);
    }
    await this.todoRepository.update(id, data);
    return this.findOne(id);
  }

  async findAll(): Promise<Todo[]> {
    return await this.todoRepository.find();
  }

  async findOne(id: string): Promise<Todo> {
    return await this.todoRepository.findOne(id);
  }

  async remove(id: string): Promise<Todo[]> {
    if (!(await this.findOne(id))) {
      throw new NotFoundException(`Todo with the id ${id} does not exist`);
    }

    await this.todoRepository.delete(id);
    return await this.findAll();
  }
}
