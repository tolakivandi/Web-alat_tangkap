const connection = require("../config/database");

class ModelKapal {
  static getAll() {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM kapal ORDER BY id_kapal DESC",
        (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        }
      );
    });
  }

  static Store(Data) {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO kapal SET ?", Data, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  static getId(id) {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM kapal WHERE id_kapal = ?",
        id,
        (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        }
      );
    });
  }

  static Update(id, Data) {
    return new Promise((resolve, reject) => {
      connection.query(
        "UPDATE kapal SET ? WHERE id_kapal = ?",
        [Data, id],
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  }

  static Delete(id) {
    return new Promise((resolve, reject) => {
      connection.query(
        "DELETE FROM kapal WHERE id_kapal = ?",
        id,
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  }
}

module.exports = ModelKapal;
