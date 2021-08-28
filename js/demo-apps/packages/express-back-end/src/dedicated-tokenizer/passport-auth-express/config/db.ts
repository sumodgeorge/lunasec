import { Database, open } from 'sqlite';
import sqlite3 from 'sqlite3';
sqlite3.verbose();

function initDb() {
  return open({
    filename: 'db.dedicated-passport-auth-express.sqlite3',
    driver: sqlite3.Database,
  }).then(async (db) => {
    await db.migrate({
      force: false, // wipe the database if true
      migrationsPath: __dirname + '/../migrations',
    });
    return db;
  });
}

let DBPromise: Promise<Database<sqlite3.Database, sqlite3.Statement>>;
export function getDb() {
  if (typeof DBPromise === 'undefined') {
    DBPromise = initDb();
  }
  return DBPromise;
}
