import type { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
declare const pgConfig: () => {
    pg: PostgresConnectionOptions;
};
export default pgConfig;
