# Frontend SIPRAK

## Sistem Peminjaman Ruang dan Fasilitas Kampus

Frontend SIPRAK merupakan antarmuka pengguna (client-side) dari aplikasi Sistem Peminjaman Ruang dan Fasilitas Kampus. Aplikasi ini dibangun menggunakan React dan Tailwind CSS untuk memberikan tampilan yang responsif, modern, dan mudah digunakan.

Frontend berfungsi untuk berinteraksi dengan backend melalui REST API, mengelola autentikasi pengguna, serta menampilkan data peminjaman ruang dan fasilitas kampus.


## Struktur Direktori

```
frontend/
├── public/                     # File statis yang disalin langsung saat build
│   └── vite.svg
│
├── src/                        # Folder kode utama aplikasi (source code)
│   ├── api/                    # Konfigurasi dan pemanggilan API
│   │   ├── axios.js            # Konfigurasi Axios & interceptor JWT
│   │   ├── auth.js             # API autentikasi
│   │   └── borrowing.js        # API peminjaman
│   │
│   ├── components/             # Komponen UI reusable
│   │   ├── Navbar.jsx          # Navigasi & logout
│   │   └── BorrowingForm.jsx   # Form pengajuan peminjaman
│   │
│   ├── pages/                  # Halaman utama aplikasi
│   │   ├── Login.jsx           # Halaman login
│   │   └── Dashboard.jsx       # Halaman dashboard peminjaman
│   │
│   ├── App.jsx                 # Komponen utama aplikasi
│   ├── main.jsx                # Entry point React
│   └── index.css               # File CSS/Tailwind utama
│
├── index.html                  # Template HTML utama (Vite)
├── package.json                # Konfigurasi project dan dependencies
├── package-lock.json           # Lock file versi dependency
├── vite.config.js              # Konfigurasi build Vite
├── tailwind.config.cjs         # Konfigurasi Tailwind CSS
├── postcss.config.cjs          # Konfigurasi PostCSS
├── eslint.config.js            # Aturan linting JavaScript
└── Readme.md                   # Dokumentasi frontend SIPRAK
```

---

## Fitur Utama

- Halaman login pengguna
- Autentikasi menggunakan JWT
- Pengajuan peminjaman ruang dan fasilitas
- Menampilkan daftar peminjaman beserta status
- Penghapusan data peminjaman
- Logout pengguna
- Tampilan responsif dan profesional

---

## Cara Menjalankan Frontend

### 1. Masuk ke folder frontend

```bash
cd frontend
```

### 2. Install dependency

```bash
npm install
```

### 3. Jalankan aplikasi

```bash
npm run dev
```

Frontend akan berjalan pada:

```
http://localhost:5173
```

---

## Konfigurasi API

Frontend terhubung dengan backend melalui REST API pada alamat berikut:

```
http://localhost:3000/api
```

Pastikan backend SIPRAK sudah berjalan sebelum menjalankan frontend.