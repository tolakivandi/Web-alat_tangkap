const connection = require("../config/database");

class ModelPemilik {
  static async getAll() {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM pemilik ORDER BY id_pemilik DESC",
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
        "INSERT INTO pemilik SET ?",
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
        "SELECT * FROM pemilik WHERE id_pemilik = ?",
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
        "UPDATE pemilik SET ? WHERE id_pemilik = ?",
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
        "DELETE FROM pemilik WHERE id_pemilik = ?",
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

module.exports = ModelPemilik;
