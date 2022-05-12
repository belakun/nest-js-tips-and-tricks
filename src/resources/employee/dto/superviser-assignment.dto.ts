import { IsString } from 'class-validator';

export class SupervisorAssignmentDto {
  @IsString()
  employeeId: string;
  @IsString()
  supervisorId: string;
}
