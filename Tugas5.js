// Data Produk
let produkList = [
    { id: 1, nama: "Laptop", harga: 12000000 },
    { id: 2, nama: "Smartphone", harga: 5000000 },
    { id: 3, nama: "Tablet", harga: 7000000 },
    { id: 4, nama: "Smartwatch", harga: 2500000 },
    { id: 5, nama: "Kamera", harga: 8500000 }
];

// Menambahkan Produk dengan Spread Operator
function tambahProduk(id, nama, harga) {
    if (produkList.some(produk => produk.id === id)) {
        console.log(`Gagal! Produk dengan ID ${id} sudah ada.`); // Jika produk dengan id yang sama sudah ada, menampilkan pesan error
        return;
    }
    produkList = [...produkList, { id, nama, harga }]; // Menambahkan produk baru tanpa mengubah array asli menggunakan Spread Operator
    console.log(`Produk ${nama} berhasil ditambahkan!`);
}

// Menghapus Produk dengan Rest Parameter
function hapusProduk(...id) { // Menghapus lebih dari satu produk sekaligus menggunakan Rest Parameter
    produkList = produkList.filter(produk => !id.includes(produk.id));
    console.log(`Produk dengan ID ${id.join(", ")} telah dihapus.`); //Membuat array baru dengan menghapus produk berdasarkan ID
}

// Menampilkan Produk dengan Destructuring
function tampilkanProduk() {
    console.log("\n=== Daftar Produk ==="); // Menampilkan semua produk yang tersedia
    if (produkList.length === 0) {
        console.log("Tidak ada produk dalam daftar."); // Jika tidak ada produk, maka menampilkan pesan "Tidak ada produk dalam daftar"
        return;
    }
    produkList.forEach(({ id, nama, harga }) => {
        console.log(`ID: ${id}, Nama: ${nama}, Harga: Rp${harga.toLocaleString("id-ID")}`); // "toLocaleString("id-ID")" digunakan untuk menampilkan harga dalam format Rupiah
    });
}

// Event Listener untuk Menjalankan Fungsi di Browser
if (typeof document !== "undefined") {
    document.addEventListener("DOMContentLoaded", () => {
        console.log("Sistem Manajemen Produk Siap!");
        tampilkanProduk();

        // Penambahan dan Penghapusan Produk
        tambahProduk(6, "Headphone", 1500000);
        tampilkanProduk();
        hapusProduk(2, 4);
        tampilkanProduk();
    });
} else {
    // Menjalankan langsung di Node.js
    console.log();
    tampilkanProduk();

    // Penambahan dan Penghapusan Produk
    tambahProduk(6, "Headphone", 1500000);
    tampilkanProduk();
    hapusProduk(2, 4);
    tampilkanProduk();
}
