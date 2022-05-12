"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wsConfig = () => ({
    ws: {
        port: parseInt(process.env.WS_PORT, 10),
    },
});
exports.default = wsConfig;
//# sourceMappingURL=ws.config.js.map