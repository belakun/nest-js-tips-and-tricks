import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import type { AsyncServiceResponse } from 'src/contracts/generic/async-service-response';
import { ApplicationError } from 'src/errors/application.error';
import { CrudService } from 'src/generic/crud.service';
import { TreeRepository } from 'typeorm';
import type { CreateEmployeeDto } from './dto/create-employee.dto';
import { Employee } from './entity/employee.entity';

@Injectable()
export class EmployeeService extends CrudService<Employee>(Employee) {
  @InjectRepository(Employee)
  private treeRepo: TreeRepository<Employee>;

  async create(data: CreateEmployeeDto): AsyncServiceResponse<Employee> {
    const employee = await this.repo.save({
      name: data.name,
    });

    if (data.supervisorId) {
      employee.supervisor = await this.repo.findOne(data.supervisorId);
    }

    await this.repo.save(employee);

    return [null, employee];
  }

  async assignSupervisor(employeeId: string, supervisorId: string): AsyncServiceResponse<Employee> {
    const employee = await this.repo.findOne(employeeId);
    const newSupervisor = await this.repo.findOne(supervisorId);

    await this.treeRepo.findAncestorsTree(employee);

    if (employee.supervisor) {
      return [new ApplicationError('Unable to assign new Supervisor. Employee already has one assigned.')];
    }

    employee.supervisor = newSupervisor;
    await this.repo.save(employee);

    return [null, employee];
  }

  async findSubordinates(id: string): AsyncServiceResponse<Employee> {
    const employee = await this.repo.findOne(id);

    const tree = await this.treeRepo.findDescendantsTree(employee);

    return [null, tree];
  }

  async findSupervisors(employeeId: string): AsyncServiceResponse<Employee> {
    const employee = await this.repo.findOne(employeeId);

    const supervisors = await this.treeRepo.findAncestorsTree(employee);

    return [null, supervisors];
  }

  async promote(employeeId: string): AsyncServiceResponse<Employee> {
    let employee = await this.getTreeEntity(employeeId);

    if (!employee.supervisor) {
      return [new ApplicationError('Unable to promote Employee.')];
    }

    const newSupervisor = employee.supervisor.supervisor;

    // TreeRepository doesn't have proper delete so
    // the record should be deleted from DB
    // to trigger cascade operation.
    await this.detach(employee);

    if (newSupervisor) {
      employee.supervisor = newSupervisor;
    } else {
      delete employee.supervisor;
    }

    employee = await this.treeRepo.save(employee);

    return [null, employee];
  }

  private async getTreeEntity(id: string): Promise<Employee> {
    const employee = await this.repo.findOne(id);

    await this.treeRepo.findAncestorsTree(employee);
    await this.treeRepo.findDescendantsTree(employee);

    return employee;
  }

  private async detach(employee: Employee): Promise<void> {
    const subordinates = employee.subordinates;

    delete employee.subordinates;

    await this.treeRepo.delete(employee);

    employee.subordinates = subordinates;
  }
}
