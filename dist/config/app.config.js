"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appConfig = () => ({
    app: {
        port: parseInt(process.env.APP_PORT, 10),
        host: process.env.APP_HOST,
        url: process.env.APP_URL,
    },
});
exports.default = appConfig;
//# sourceMappingURL=app.config.js.map