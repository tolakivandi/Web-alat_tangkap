const connection = require("../config/database");

class ModelDPI {
  static async getAll() {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM dpi ORDER BY id_dpi DESC",
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
      connection.query("INSERT INTO dpi SET ?", data, function (err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  static async getId(id) {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM dpi WHERE id_dpi = ?",
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
        "UPDATE dpi SET ? WHERE id_dpi = ?",
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
        "DELETE FROM dpi WHERE id_dpi = ?",
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

module.exports = ModelDPI;
