const express = require("express");
const router = express.Router();
const ModelAlatTangkap = require("../Model/Model_alat_tangkap");

router.get("/", async function (req, res, next) {
  try {
    let rows = await ModelAlatTangkap.getAll();
    res.render("alat_tangkap/index", {
      data: rows,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/create", function (req, res, next) {
  res.render("alat_tangkap/create", {
    nama_alat_tangkap: "",
  });
});

router.post("/store", async function (req, res, next) {
  try {
    let data = {
      nama_alat_tangkap: req.body.nama_alat_tangkap,
    };
    await ModelAlatTangkap.Store(data);
    req.flash("success", "Data berhasil disimpan");
    res.redirect("/alat_tangkap");
  } catch (error) {
    console.error("Error:", error);
    req.flash("error", "Terjadi kesalahan pada fungsi");
    res.redirect("/alat_tangkap");
  }
});

router.get("/edit/:id", async function (req, res, next) {
  try {
    let id = req.params.id;
    let rows = await ModelAlatTangkap.getId(id);

    if (rows.length === 0) {
      return res.status(404).send("Data not found");
    }

    res.render("alat_tangkap/edit", {
      id: id,
      nama_alat_tangkap: rows[0].nama_alat_tangkap,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/update/:id", async function (req, res, next) {
  try {
    let id = req.params.id;
    let data = {
      nama_alat_tangkap: req.body.nama_alat_tangkap,
    };
    await ModelAlatTangkap.Update(id, data);
    req.flash("success", "Data berhasil diperbarui");
    res.redirect("/alat_tangkap");
  } catch (error) {
    console.error("Error:", error);
    req.flash("error", "Terjadi kesalahan pada fungsi");
    res.redirect("/alat_tangkap");
  }
});

router.get("/delete/:id", async function (req, res) {
  try {
    let id = req.params.id;
    await ModelAlatTangkap.Delete(id);
    req.flash("success", "Data berhasil dihapus");
    res.redirect("/alat_tangkap");
  } catch (error) {
    console.error("Error:", error);
    req.flash("error", "Terjadi kesalahan pada fungsi");
    res.redirect("/alat_tangkap");
  }
});

module.exports = router;
