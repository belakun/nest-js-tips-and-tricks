"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function IOC(token, dependency) {
    return {
        provide: token,
        useClass: dependency,
    };
}
exports.default = IOC;
//# sourceMappingURL=set-dependency.js.map