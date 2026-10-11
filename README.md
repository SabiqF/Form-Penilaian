# Aplikasi Penilaian Mahasiswa

Aplikasi web sederhana untuk menghitung nilai akhir mahasiswa dari dua input:
- Nilai Tugas (bobot 40%)
- Nilai Ujian (bobot 60%)

## Cara menjalankan
1. Ekstrak folder proyek.
2. Buka `index.html` dengan browser (Chrome, Edge, Firefox, atau browser modern lain).
3. Isi kedua nilai dengan angka antara 0 dan 100.
4. Klik satu-satunya tombol, **Hitung Nilai**.
5. Hasil akan menampilkan nilai akhir, predikat, status, dan penjelasan perhitungan.

Tidak diperlukan instalasi, server, atau koneksi internet untuk menjalankan logika aplikasi. Font dari Google Fonts hanya mempercantik tampilan; jika tidak tersedia, font cadangan tetap digunakan.

## Rumus
Nilai Akhir = (Nilai Tugas × 0,40) + (Nilai Ujian × 0,60)

## Predikat
- A: 85–100
- B: 75–84,99
- C: 65–74,99
- D: 50–64,99
- E: 0–49,99

Status **Lulus** jika nilai akhir >= 65; selain itu **Belum lulus**.

## Kesesuaian dengan persyaratan tugas
- 2 input: nilai tugas dan nilai ujian.
- 1 tombol: Hitung Nilai.
- Validasi input numerik dan rentang 0–100. `TryParse` merupakan metode C#; dalam JavaScript validasi dilakukan dengan `Number()` dan `Number.isFinite()`.
- Percabangan: `if / else if / else` untuk predikat dan `if / else` untuk status.
- Perulangan: `for` membuat daftar referensi predikat dari array.
- Output jelas: nilai akhir, predikat, status, dan pesan validasi.

## Berkas proyek
- `index.html`: struktur dan dua input, satu tombol, area output.
- `style.css`: tampilan responsif.
- `script.js`: validasi, rumus, percabangan, perulangan.
- `Laporan_Singkat.docx`: laporan singkat dan panduan pengujian.
