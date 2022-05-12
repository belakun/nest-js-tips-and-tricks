import { IsOptional, IsString } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  name: string;
  @IsString()
  @IsOptional()
  supervisorId?: string;
}
