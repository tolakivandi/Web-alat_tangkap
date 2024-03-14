const connection = require("../config/database");

class Model_alat_tangkap {
  static async getAll() {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM alat_tangkap ORDER BY id_alat_tangkap DESC",
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

  static async Store(data) {
    return new Promise((resolve, reject) => {
      connection.query(
        "INSERT INTO alat_tangkap SET ?",
        data,
        function (err, result) {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  }

  static async getId(id) {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM alat_tangkap WHERE id_alat_tangkap = ?",
        id,
        function (err, rows) {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        }
      );
    });
  }

  static async Update(id, data) {
    return new Promise((resolve, reject) => {
      connection.query(
        "UPDATE alat_tangkap SET ? WHERE id_alat_tangkap = ?",
        [data, id],
        function (err, result) {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  }

  static async Delete(id) {
    return new Promise((resolve, reject) => {
      connection.query(
        "DELETE FROM alat_tangkap WHERE id_alat_tangkap = ?",
        id,
        function (err, result) {
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

module.exports = Model_alat_tangkap;
