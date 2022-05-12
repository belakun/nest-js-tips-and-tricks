"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_connection_string_1 = require("pg-connection-string");
var EnvBooleans;
(function (EnvBooleans) {
    EnvBooleans["TRUE"] = "1";
    EnvBooleans["FALSE"] = "0";
})(EnvBooleans || (EnvBooleans = {}));
const pgConfig = () => {
    const pgURL = (0, pg_connection_string_1.parse)(process.env.DATABASE_URL || '');
    return {
        pg: {
            type: 'postgres',
            host: pgURL.host || process.env.PG_URL,
            port: parseInt(pgURL.port || process.env.PG_PORT || '5432', 10),
            username: pgURL.user || process.env.PG_USER,
            password: pgURL.password || process.env.PG_PASSWORD,
            database: pgURL.database || process.env.PG_DB_NAME,
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            migrations: [__dirname + '/../infrastructure/db/migrations/**/*{.ts,.js}'],
            cli: {
                migrationsDir: 'src/infrastructure/db/migrations',
            },
            synchronize: process.env.PG_SYNCHRONIZE === EnvBooleans.TRUE,
            migrationsRun: process.env.PG_RUN_MIGRATIONS === EnvBooleans.TRUE,
        },
    };
};
exports.default = pgConfig;
//# sourceMappingURL=pg.config.js.map