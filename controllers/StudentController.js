class StudentController {
    index(req, res) {
        res.send("Menampilkan Semua Mahasiswa");
    }

    store(req, res) {
        res.send("Menambahkan Data Mahasiswa");
    }

    update(req, res) {
        const {id} = req.params;
        res.send(`Mengedit Data Mahasiswa ${id}`);
    }

    destroy(req, res) {
        const {id} = req.params;
        res.send(`Menghapus Data Mahasiswa ${id}`);
    }
}

const object = new StudentController();
module.exports = object;