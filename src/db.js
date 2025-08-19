const sqlite3 = require('sqlite3').verbose();
const path = require('path');


let db;


function getDb() {
if (!db) {
const dbPath = path.join(__dirname, '..', 'data.sqlite');
db = new sqlite3.Database(dbPath);
}
return db;
}


async function initDb() {
const db = getDb();
await run(db, `CREATE TABLE IF NOT EXISTS investments (
id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT NOT NULL,
type TEXT NOT NULL,
amount REAL NOT NULL,
date TEXT NOT NULL
)`);
}


function run(db, sql, params = []) {
return new Promise((resolve, reject) => {
db.run(sql, params, function (err) {
if (err) return reject(err);
resolve(this);
});
});
}


function all(db, sql, params = []) {
return new Promise((resolve, reject) => {
db.all(sql, params, (err, rows) => {
if (err) return reject(err);
resolve(rows);
});
});
}


function get(db, sql, params = []) {
return new Promise((resolve, reject) => {
db.get(sql, params, (err, row) => {
if (err) return reject(err);
resolve(row);
});
});
}


module.exports = { getDb, initDb, run, all, get };