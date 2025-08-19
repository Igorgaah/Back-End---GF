const { getDb, all, get, run } = require('../db');


async function findAll() {
const db = getDb();
return all(db, 'SELECT * FROM investments ORDER BY date DESC, id DESC');
}


async function findById(id) {
const db = getDb();
return get(db, 'SELECT * FROM investments WHERE id = ?', [id]);
}


async function create({ name, type, amount, date }) {
const db = getDb();
const res = await run(db, 'INSERT INTO investments (name, type, amount, date) VALUES (?,?,?,?)', [name, type, amount, date]);
return { id: res.lastID, name, type, amount, date };
}


async function update(id, { name, type, amount, date }) {
const db = getDb();
await run(db, 'UPDATE investments SET name=?, type=?, amount=?, date=? WHERE id=?', [name, type, amount, date, id]);
return findById(id);
}


async function remove(id) {
const db = getDb();
await run(db, 'DELETE FROM investments WHERE id=?', [id]);
}


module.exports = { findAll, findById, create, update, remove };