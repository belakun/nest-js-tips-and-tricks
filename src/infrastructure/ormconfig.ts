import * as dotenv from 'dotenv';
import * as path from 'path';
import type { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import pgConfig from '../config/pg.config';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const config: PostgresConnectionOptions = { ...pgConfig().pg, logging: 'all', logger: 'advanced-console' };

export default config;
