"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationError = void 0;
const constants_1 = require("./constants");
class ApplicationError {
    constructor(message) {
        this.type = constants_1.ErrorType.APPLICATION_ERROR;
        this.message = message;
    }
    get payload() {
        return this.message;
    }
}
exports.ApplicationError = ApplicationError;
//# sourceMappingURL=base.error.js.map