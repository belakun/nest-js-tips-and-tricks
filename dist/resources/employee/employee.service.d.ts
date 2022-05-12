import type { AsyncServiceResponse } from 'src/contracts/generic/async-service-response';
import type { CreateEmployeeDto } from './dto/create-employee.dto';
import { Employee } from './entity/employee.entity';
declare const EmployeeService_base: import("@nestjs/common").Type<import("../../contracts/generic/crud-service.interface").ICrudService<Employee>>;
export declare class EmployeeService extends EmployeeService_base {
    private treeRepo;
    create(data: CreateEmployeeDto): AsyncServiceResponse<Employee>;
    assignSupervisor(employeeId: string, supervisorId: string): AsyncServiceResponse<Employee>;
    findSubordinates(id: string): AsyncServiceResponse<Employee>;
    findSupervisors(employeeId: string): AsyncServiceResponse<Employee>;
    promote(employeeId: string): AsyncServiceResponse<Employee>;
    private getTreeEntity;
    private detach;
}
export {};
