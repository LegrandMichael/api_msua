import { Pool } from 'pg';
import dotenv from 'dotenv';
import {
    pgUser, pgPswd, pgHost, pgPort, pgDb
} from '../settings';

const connectionString = `postgresql://${pgUser}:${pgPswd}@${pgHost}:${pgPort}/${pgDb}`;

dotenv.config();

export const pool = new Pool({
    connectionString
});
