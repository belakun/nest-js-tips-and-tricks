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
exports.CrudService = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const application_error_1 = require("../errors/application.error");
const typeorm_2 = require("typeorm");
function CrudService(entity) {
    class CrudServiceHost {
        async findOne(id) {
            try {
                return [null, await this.repo.findOneOrFail(id)];
            }
            catch (error) {
                return [new application_error_1.ApplicationError(`Communication not found communication`)];
            }
        }
        async findMany() {
            try {
                return [null, await this.repo.find()];
            }
            catch (error) {
                return [new application_error_1.ApplicationError(`Communication not found communication`)];
            }
        }
        async createUniqueOrFail(data) {
            throw new Error('Method not implemented.');
        }
        async updateUniqueOrFail(id, changes) {
            throw new Error('Method not implemented.');
        }
        async find() {
            return this.repo.find();
        }
    }
    __decorate([
        (0, typeorm_1.InjectRepository)(entity),
        __metadata("design:type", typeorm_2.Repository)
    ], CrudServiceHost.prototype, "repo", void 0);
    return CrudServiceHost;
}
exports.CrudService = CrudService;
//# sourceMappingURL=crud.service.js.map