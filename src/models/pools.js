import { Pool } from 'pg';
import dotenv from 'dotenv';
import {
    pgdb, pghost, pgport, pgpswd, pguser, dburi
} from '../settings';

dotenv.config();

const connectionString = `postgresql://${pguser}:${pgpswd}@${pghost}:${pgport}/${pgdb}`;
const dbUri = dburi;

export const pool = new Pool({
    connectionString,
    dbUri
});
