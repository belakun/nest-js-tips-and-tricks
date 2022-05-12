"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MirroringController = void 0;
const common_1 = require("@nestjs/common");
const MirroringController = (options = {}) => {
    const root = 'dist';
    let calculatedPath = options.path;
    if (typeof options.path === 'string') {
        calculatedPath = options.path.split(root)[1];
    }
    return (0, common_1.applyDecorators)((0, common_1.Controller)(Object.assign(Object.assign({}, options), { path: calculatedPath })));
};
exports.MirroringController = MirroringController;
//# sourceMappingURL=mirroring-controller.decorator.js.map