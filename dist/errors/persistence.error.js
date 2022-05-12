"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FailedToSaveError = void 0;
const constants_1 = require("./constants");
class FailedToSaveError {
    constructor(entity) {
        this.type = constants_1.ErrorType.DB_ERROR;
        this.message = `Failed to save entity: "${entity.name}"`;
    }
}
exports.FailedToSaveError = FailedToSaveError;
//# sourceMappingURL=persistence.error.js.map