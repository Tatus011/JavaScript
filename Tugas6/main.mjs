// Mengimpor fungsi dari file 'controller.mjs'
import { index, store, destroy } from "./controller.mjs";

// Fungsi utama yang akan menjalankan beberapa operasi
const main = () => {
    console.log("Sistem Manajemen Pengguna");

    // Menampilkan data awal
    index();

    // Menambahkan dua data baru
    store({ nama: "Data 11", umur: 30, alamat: "Jl. Data 11", email: "data11@email.com" });
    store({ nama: "Data 12", umur: 31, alamat: "Jl. Data 12", email: "data12@email.com" });

    // Menampilkan data setelah penambahan
    index();

    // Menghapus data berdasarkan index (contoh: menghapus data ke-2)
    destroy(1);

     // Menampilkan data setelah penghapusan
    index();
};

// Menjalankan fungsi 'main()'
main();
