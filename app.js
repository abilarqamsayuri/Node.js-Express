const express = require("express");
const router = require("./routes/api.js");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/students", (req, res) => {
    res.send("Menampilkan Semua Mahasiswa");
});

app.post("/students", (req, res) => {
    res.send("Menambahkan Data Mahasiswa");
});

app.put("/students/:id", (req, res) => {
    const {id} = req.params;
    res.send(`Mengedit Data Mahasiswa ${id}`);
});

app.delete("/students", (req, res) => {
    const {id} = req.params;
    res.send(`Menghapus Data Mahasiswa ${id}`);
});

app.use(router);
app.listen(3000);