import { pool } from '../models/pools';
import { insertMessages, createMessageTable, dropMessageTable } from './queries';

export const executeQueryArray = async arr => new Promise(resolve => {
    const stop = arr.length;
    arr.forEach(async (q, index) => {
        await pool.query(q);
        if (index + 1 === stop) resolve();
    });
});

export const dropTables = () => executeQueryArray([ dropMessageTable ]);
export const createTables = () => executeQueryArray([ createMessageTable ]);
export const insertIntoTables = () => executeQueryArray([ insertMessages ]);
