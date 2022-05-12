"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const application_error_1 = require("../../errors/application.error");
const crud_service_1 = require("../../generic/crud.service");
const typeorm_2 = require("typeorm");
const employee_entity_1 = require("./entity/employee.entity");
let EmployeeService = class EmployeeService extends (0, crud_service_1.CrudService)(employee_entity_1.Employee) {
    async create(data) {
        const employee = await this.repo.save({
            name: data.name,
        });
        if (data.supervisorId) {
            employee.supervisor = await this.repo.findOne(data.supervisorId);
        }
        await this.repo.save(employee);
        return [null, employee];
    }
    async assignSupervisor(employeeId, supervisorId) {
        const employee = await this.repo.findOne(employeeId);
        const newSupervisor = await this.repo.findOne(supervisorId);
        await this.treeRepo.findAncestorsTree(employee);
        if (employee.supervisor) {
            return [new application_error_1.ApplicationError('Unable to assign new Supervisor. Employee already has one assigned.')];
        }
        employee.supervisor = newSupervisor;
        await this.repo.save(employee);
        return [null, employee];
    }
    async findSubordinates(id) {
        const employee = await this.repo.findOne(id);
        const tree = await this.treeRepo.findDescendantsTree(employee);
        return [null, tree];
    }
    async findSupervisors(employeeId) {
        const employee = await this.repo.findOne(employeeId);
        const supervisors = await this.treeRepo.findAncestorsTree(employee);
        return [null, supervisors];
    }
    async promote(employeeId) {
        let employee = await this.getTreeEntity(employeeId);
        if (!employee.supervisor) {
            return [new application_error_1.ApplicationError('Unable to promote Employee.')];
        }
        const newSupervisor = employee.supervisor.supervisor;
        await this.detach(employee);
        if (newSupervisor) {
            employee.supervisor = newSupervisor;
        }
        else {
            delete employee.supervisor;
        }
        employee = await this.treeRepo.save(employee);
        return [null, employee];
    }
    async getTreeEntity(id) {
        const employee = await this.repo.findOne(id);
        await this.treeRepo.findAncestorsTree(employee);
        await this.treeRepo.findDescendantsTree(employee);
        return employee;
    }
    async detach(employee) {
        const subordinates = employee.subordinates;
        delete employee.subordinates;
        await this.treeRepo.delete(employee);
        employee.subordinates = subordinates;
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(employee_entity_1.Employee),
    __metadata("design:type", typeorm_2.TreeRepository)
], EmployeeService.prototype, "treeRepo", void 0);
EmployeeService = __decorate([
    (0, common_1.Injectable)()
], EmployeeService);
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map