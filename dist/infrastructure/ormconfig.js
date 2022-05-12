"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const path = require("path");
const pg_config_1 = require("../config/pg.config");
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });
const config = Object.assign(Object.assign({}, (0, pg_config_1.default)().pg), { logging: 'all', logger: 'advanced-console' });
exports.default = config;
//# sourceMappingURL=ormconfig.js.map