import { Pool } from 'pg';
import dotenv from 'dotenv';
import {
    localConnectionString, devConnectionString
} from '../settings';

dotenv.config();

export const pool = new Pool({
    connectionString: localConnectionString || devConnectionString,
});
