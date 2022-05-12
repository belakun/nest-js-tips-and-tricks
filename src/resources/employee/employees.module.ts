import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EmployeeService } from './employee.service';
import { EmployeesController } from './employees.controller';
import { Employee } from './entity/employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Employee])],
  controllers: [EmployeesController],
  providers: [EmployeeService],
  exports: [EmployeeService],
})
export class EmployeesModule {}
