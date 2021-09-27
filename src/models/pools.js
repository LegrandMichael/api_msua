import { Pool } from 'pg';
import dotenv from 'dotenv';
import {
    localConnectionString
} from '../settings';

dotenv.config();

export const pool = new Pool({
    connectionString: localConnectionString,
    ssl: {
        rejectUnauthorized: false,
    }
});
