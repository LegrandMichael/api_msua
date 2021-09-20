import { createTables, insertIntoTables } from './queryFunction';

(async () => {
    try {
        await createTables();
        await insertIntoTables();
    } catch (e) {
        console.log(e);
    }
})();
