import dotenv from 'dotenv';

dotenv.config();

export const testEnvironmentVariable = process.env.TEST_ENV_VARIABLE;
export const pgHost = process.env.PGHOST;
export const pgUser = process.env.PGUSER;
export const pgDb = process.env.PGDATABASE;
export const pgPswd = process.env.PGPASSWORD;
export const pgPort = process.env.PGPORT;
