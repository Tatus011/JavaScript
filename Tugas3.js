// Array untuk menyimpan daftar produk
let produkToko = [
    { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
    { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
    { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

// Fungsi untuk menambahkan produk baru
function tambahProduk(nama, harga, stok) {
    let idBaru = produkToko.length + 1; // ID produk dihitung sesuai dengan panjang array ditambah +1
    produkToko.push({ id: idBaru, nama, harga, stok });
    console.log(`Produk ${nama} berhasil ditambahkan.`);
}

// Fungsi untuk menghapus produk berdasarkan ID
function hapusProduk(id) {
    produkToko = produkToko.filter(produk => produk.id !== id);
    console.log(`Produk dengan ID ${id} telah dihapus.`);
}

// Fungsi untuk menampilkan daftar produk
function tampilkanProduk() {
    console.log("Daftar Produk di Toko:");
    produkToko.forEach(produk => {
        console.log(`ID: ${produk.id}, Nama: ${produk.nama}, Harga: ${produk.harga}, Stok: ${produk.stok}`);
    });
}


tambahProduk("Monitor", 1500000, 3); // Produk baru yang ditambahkan
tampilkanProduk(); // Output setelah menambah produk baru
hapusProduk(2); // Menghapus produk dengan ID 2
tampilkanProduk(); // Output setelah menghapus produk
