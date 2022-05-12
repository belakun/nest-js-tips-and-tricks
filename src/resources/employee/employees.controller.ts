import { Body, Get, Inject, Post, Query } from '@nestjs/common';
import { MirroringController } from 'src/decorators/mirroring-controller.decorator';
import { CrudController } from '../../generic/crud.controller';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { SupervisorAssignmentDto } from './dto/superviser-assignment.dto';
import { EmployeeService } from './employee.service';
import type { Employee } from './entity/employee.entity';

@MirroringController({ path: __dirname })
export class EmployeesController extends CrudController<EmployeeService, Employee>(EmployeeService) {
  @Inject(EmployeeService)
  private employeeService: EmployeeService;

  @Post()
  async create(@Body() employee: CreateEmployeeDto): Promise<any> {
    const [failure, success] = await this.employeeService.create(employee);

    if (failure) {
      this.errors.get(failure);
    }

    return success;
  }

  @Post('assign')
  async assignSupervisor(@Body() assignmentData: SupervisorAssignmentDto): Promise<any> {
    const [failure, success] = await this.employeeService.assignSupervisor(
      assignmentData.employeeId,
      assignmentData.supervisorId
    );

    if (failure) {
      throw this.errors.get(failure);
    }

    return success;
  }

  @Get('subordinates')
  async getSubordinates(@Query('id') employeeId: string): Promise<any> {
    const [failure, success] = await this.employeeService.findSubordinates(employeeId);

    if (failure) {
      this.errors.get(failure);
    }

    return success;
  }

  @Get('supervisors')
  async getSupervisors(@Query('id') employeeId: string): Promise<any> {
    const [failure, success] = await this.employeeService.findSupervisors(employeeId);

    if (failure) {
      this.errors.get(failure);
    }

    return success;
  }

  @Get('promote')
  async promote(@Query() id: string): Promise<any> {
    const [failure, success] = await this.employeeService.promote(id);

    if (failure) {
      throw this.errors.get(failure);
    }

    return success;
  }
}
