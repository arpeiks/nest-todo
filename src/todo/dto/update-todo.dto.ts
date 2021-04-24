import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateTodoDto {
  @IsDate()
  @IsOptional()
  due?: Date;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  task?: string;

  @IsBoolean()
  @IsOptional()
  completed?: boolean;
}
