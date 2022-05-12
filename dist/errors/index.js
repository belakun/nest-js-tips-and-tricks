"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpErrors = void 0;
const common_1 = require("@nestjs/common");
exports.httpErrors = {
    nothingUpdated: new common_1.NotFoundException({
        status: common_1.HttpStatus.FORBIDDEN,
        message: 'Nothing was updated',
    }),
    campaignNotFound: new common_1.NotFoundException({
        status: common_1.HttpStatus.NOT_FOUND,
        message: 'Campaign not found',
    }),
    buildingNotFound: new common_1.NotFoundException({
        status: common_1.HttpStatus.NOT_FOUND,
        message: 'Building not found',
    }),
    notUniqueContact: new common_1.ConflictException({
        status: common_1.HttpStatus.CONFLICT,
        message: 'Provided contact already exists',
    }),
    contactNotFound: new common_1.NotFoundException({
        status: common_1.HttpStatus.NOT_FOUND,
        message: 'Contact not found',
    }),
    employeeNotFound: new common_1.NotFoundException({
        status: common_1.HttpStatus.NOT_FOUND,
        message: 'Employee not found',
    }),
    statusNotFound: new common_1.NotFoundException({
        status: common_1.HttpStatus.NOT_FOUND,
        message: 'Status not found',
    }),
};
//# sourceMappingURL=index.js.map