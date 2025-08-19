const db = require("../config/db");

// =========================
// LISTAR TODOS
// =========================
async function getAllInvestments() {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM investments", (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
}

// =========================
// LISTAR POR ID
// =========================
async function getInvestmentById(id) {
  return new Promise((resolve, reject) => {
    db.get("SELECT * FROM investments WHERE id = ?", [id], (err, row) => {
      if (err) return reject(err);
      resolve(row);
    });
  });
}

// =========================
// CRIAR
// =========================
async function createInvestment(investment) {
  return new Promise((resolve, reject) => {
    const { name, type, amount, date } = investment;
    db.run(
      "INSERT INTO investments (name, type, amount, date) VALUES (?, ?, ?, ?)",
      [name, type, amount, date],
      function (err) {
        if (err) return reject(err);
        resolve({ id: this.lastID, ...investment });
      }
    );
  });
}

// =========================
// ATUALIZAR
// =========================
async function updateInvestment(id, investment) {
  return new Promise((resolve, reject) => {
    const { name, type, amount, date } = investment;
    db.run(
      "UPDATE investments SET name = ?, type = ?, amount = ?, date = ? WHERE id = ?",
      [name, type, amount, date, id],
      function (err) {
        if (err) return reject(err);
        resolve({ changes: this.changes }); // retorna quantas linhas foram alteradas
      }
    );
  });
}

// =========================
// DELETAR
// =========================
async function deleteInvestment(id) {
  return new Promise((resolve, reject) => {
    db.run("DELETE FROM investments WHERE id = ?", [id], function (err) {
      if (err) return reject(err);
      resolve({ changes: this.changes }); // retorna quantas linhas foram deletadas
    });
  });
}

module.exports = {
  getAllInvestments,
  getInvestmentById,
  createInvestment,
  updateInvestment,
  deleteInvestment,
};
