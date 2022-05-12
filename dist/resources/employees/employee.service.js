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
const application_error_1 = require("../../errors/application.error");
const crud_service_1 = require("../../generic/crud.service");
const typeorm_1 = require("typeorm");
const employee_entity_1 = require("./entity/employee.entity");
let EmployeeService = class EmployeeService extends (0, crud_service_1.CrudService)(employee_entity_1.Employee) {
    async getEmployeeTree(id) {
        const employee = await this.repo.findOne(id);
        const treeRepo = this.entityManager.getTreeRepository(employee_entity_1.Employee);
        const tree = await treeRepo.findDescendantsTree(employee);
        return [null, tree];
    }
    async create(data) {
        const employee = await this.repo.save({
            name: data.name,
        });
        if (data.subordinateIds.length) {
            const subordinates = await this.getManyByIds(data.subordinateIds);
        }
        if (data.supervisorId) {
            employee.supervisor = await this.repo.findOne(data.supervisorId);
            await this.repo.save(employee);
        }
        return [null, employee];
    }
    async saveTree(employee) {
        return [new application_error_1.ApplicationError('dummy')];
    }
    async getManyByIds(ids) { }
};
__decorate([
    (0, common_1.Inject)(),
    __metadata("design:type", typeorm_1.EntityManager)
], EmployeeService.prototype, "entityManager", void 0);
EmployeeService = __decorate([
    (0, common_1.Injectable)()
], EmployeeService);
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map