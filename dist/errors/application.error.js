"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationError = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("./constants");
class ApplicationError extends common_1.BadRequestException {
    constructor(message) {
        super();
        this.type = constants_1.ErrorType.APPLICATION_ERROR;
        this.message = message;
    }
    get payload() {
        return this.message;
    }
}
exports.ApplicationError = ApplicationError;
//# sourceMappingURL=application.error.js.map