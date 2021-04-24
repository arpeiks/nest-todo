import {
  Put,
  Get,
  Body,
  Post,
  Param,
  Delete,
  Controller,
} from '@nestjs/common';

import { Todo } from './todo.entity';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ValidatePayloadExistsPipe } from 'src/common/payload-exists-pipe';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  async create(@Body() data: CreateTodoDto): Promise<Todo> {
    return await this.todoService.create(data);
  }

  @Get()
  async findAll(): Promise<Todo[]> {
    return await this.todoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Todo> {
    return await this.todoService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body(new ValidatePayloadExistsPipe()) data: UpdateTodoDto,
  ): Promise<Todo> {
    return await this.todoService.update(id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Todo[]> {
    return await this.todoService.remove(id);
  }
}
