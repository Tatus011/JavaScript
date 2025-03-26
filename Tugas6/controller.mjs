// Mengimpor data 'users' dari file 'data.mjs'
import users from "./data.mjs";

// Fungsi untuk menampilkan semua data menggunakan 'map()'
const index = () => {
    console.log("Daftar Pengguna:");
    users.map((user, index) => {
        console.log('${index + 1}. ${user.nama}, ${user.umur} tahun, ${user.alamat}, ${user.email}');
    });
};

// Fungsi untuk menambahkan data baru ke dalam 'users'
const store = (newUser) => {
    users.push(newUser); // Menambahkan data baru ke array 'users'
    console.log('User ${newUser.nama} berhasil ditambahkan!');
};

// Fungsi untuk menghapus data berdasarkan index
const destroy = (indexToRemove) => {
    if (indexToRemove >= 0 && indexToRemove < users.length) {
        let removedUser = users.splice(indexToRemove, 1); // Menghapus data berdasarkan index
        console.log('User ${removedUser[0].nama} telah dihapus.');
    } else {
        console.log("Index tidak valid!");
    }
};

// Mengekspor fungsi agar dapat digunakan di file lain
export { index, store, destroy };
