import { IsNotEmpty, IsDateString, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsDateString()
  due: Date;

  @IsString()
  @IsNotEmpty()
  task: string;
}
