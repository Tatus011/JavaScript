// Class Kendaraan berisikan informasi jenis, merek, plat nomer dan status kendaraan
class Kendaraan {
    constructor(jenis, merek, platNomor) {
        this.jenis = jenis;
        this.merek = merek;
        this.platNomor = platNomor;
        this.disewa = false;
    }

    // Menandai kendaraan yang tersedia atau tidak untuk disewa
    sewa() {
        if (this.disewa) {
            console.log(`${this.merek} (${this.platNomor}) sudah disewa.`); // Jika kendaraan sudah disewa, menampilkan pesan peringatan
        } else {
            this.disewa = true;
            console.log(`${this.merek} (${this.platNomor}) berhasil disewa.`); // Jika kendaraan belum disewa, menampilkan pesan sukses (mengubah status disewa = true)
        }
    }

    // Menandai kendaraan yang tidak bisa dikembalikan dan yang bisa dikembalikan
    kembalikan() {
        if (!this.disewa) {
            console.log(`${this.merek} (${this.platNomor}) belum disewa, tidak bisa dikembalikan.`); // Jika kendaraan tidak sedang disewa, menampilkan pesan error
        } else {
            this.disewa = false;
            console.log(`${this.merek} (${this.platNomor}) telah dikembalikan dan siap disewa kembali.`); // Jika kendaraan sedang disewa, mengubah status dan menampilkan pesan sukses
        }
    }
}

// Class Pelanggan berisikan informasi pelanggan yaitu nama, nomer telepon, dan kendaraan yang di sewa
class Pelanggan {
    constructor(nama, nomorTelepon) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = null;
    }

    // Method untuk pelanggan menyewa kendaraan
    sewaKendaraan(kendaraan, sistem) {
        if (!kendaraan.disewa) {
            kendaraan.sewa();
            this.kendaraanDisewa = kendaraan; 
            sistem.catatTransaksi(this, kendaraan); // Memanggil method sewa() dari Kendaraan, lalu menyimpananya, kemudian mencatat transaksi penyewaan
        } else {
            console.log(`Maaf, kendaraan ${kendaraan.merek} sedang disewa oleh pelanggan lain.`); // Jika kendaraan sudah disewa pelanggan lain, menampilkan pesan error
        }
    }

    // Mengembalikan kendaraan yang sedang disewa oleh pelanggan
    kembalikanKendaraan() {
        if (this.kendaraanDisewa) {
            console.log(`${this.nama} mengembalikan ${this.kendaraanDisewa.merek} (${this.kendaraanDisewa.platNomor}).`); // Jika pelanggan memiliki kendaraan, menampilkan pesan pengembalian

            // Memanggil method kembalikan() dan meng-set ulang kendaraan yang di sewa
            this.kendaraanDisewa.kembalikan();
            this.kendaraanDisewa = null;
        } else {
            console.log(`${this.nama} tidak memiliki kendaraan yang disewa.`); // Jika pelanggan tidak menyewa kendaraan, menampilkan pesan error
        }
    }
}

// Class ManajemenTransportasi digunakan untuk mengelola daftar pelanggan dan transaksi
class ManajemenTransportasi {
    constructor() {
        this.pelangganList = [];
        this.transaksiList = [];
    }

    tambahPelanggan(pelanggan) {
        this.pelangganList.push(pelanggan); // Menambahkan pelanggan ke dalam daftar list pelanggan
    }

    // Berfungsi untuk mencatat transaksi penyewaan kendaraan oleh pelanggan
    // berisikan nama pelanggan, nomer telepon, kendaraan, dan plat nomer
    catatTransaksi(pelanggan, kendaraan) {
        const transaksi = {
            pelanggan: pelanggan.nama,
            nomorTelepon: pelanggan.nomorTelepon,
            kendaraan: kendaraan.merek,
            platNomor: kendaraan.platNomor,
        };
        this.transaksiList.push(transaksi); // Menyimpan transaksi
        console.log("Transaksi tercatat:", transaksi); // Menampilkan pesan sukses saat transaksi dicatat
    }

    // Menampilkan daftar pelanggan yang sedang menyewa kendaraan
    tampilkanPelangganYangMenyewa() {
        console.log("Daftar Pelanggan yang Sedang Menyewa Kendaraan:"); 
        // Jika pelanggan memiliki kendaraan yang disewa, tampilkan nama pelanggan + info kendaraan
        this.pelangganList.forEach((pelanggan) => {
            if (pelanggan.kendaraanDisewa) {
                console.log(`${pelanggan.nama} (${pelanggan.nomorTelepon}) menyewa ${pelanggan.kendaraanDisewa.merek} (${pelanggan.kendaraanDisewa.platNomor}).`);
            }
        });
    }
}

// Membuat Kendaraan-kendaraan yang dapat disewa
const kendaraan1 = new Kendaraan("Mobil", "Toyota Avanza", "P 1234 ABC");
const kendaraan2 = new Kendaraan("Motor", "Honda Vario", "P 5678 HIJ");
const kendaraan3 = new Kendaraan("Motor", "Honda Beat", "P 6547 ZAQ");

// Membuat data pelanggan yang dapat menyewa kendaraan
const pelanggan1 = new Pelanggan("Andi", "081234567890");
const pelanggan2 = new Pelanggan("Budi", "089876543210");
const pelanggan3 = new Pelanggan("Yanto", "083457889888");

// Membuat sistem manajemen transportasi dan menambahkan pelanggan
const sistem = new ManajemenTransportasi();
sistem.tambahPelanggan(pelanggan1);
sistem.tambahPelanggan(pelanggan2);
sistem.tambahPelanggan(pelanggan3);

// Pelanggan menyewa kendaraan kemudian data di simpan dalam sistem
pelanggan1.sewaKendaraan(kendaraan1, sistem);
pelanggan2.sewaKendaraan(kendaraan2, sistem);
pelanggan3.sewaKendaraan(kendaraan3, sistem);

// Menampilkan pelanggan yang sedang menyewa kendaraan
sistem.tampilkanPelangganYangMenyewa();

// Pelanggan mengembalikan kendaraan dan status akan berubah menjadi tersedia
console.log("\n=== Proses Pengembalian Kendaraan ===");
pelanggan1.kembalikanKendaraan();
pelanggan2.kembalikanKendaraan();
pelanggan3.kembalikanKendaraan();

// Menampilkan daftar pelanggan yang masih menyewa setelah pengembalian
console.log("\n=== Setelah Pengembalian ===");
sistem.tampilkanPelangganYangMenyewa();
