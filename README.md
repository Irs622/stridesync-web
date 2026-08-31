# 🏃‍♂️⚡️ StrideSync Web — Athletic Intelligence & GPS Running App

<div align="center">

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Production%20Live-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://stridesync-web.vercel.app)
[![Version](https://img.shields.io/badge/Version-v0.5.0--beta-orange?style=for-the-badge)](https://stridesync-web.vercel.app)
[![React 18](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.1.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![iOS 17+](https://img.shields.io/badge/iOS_App-Swift_6-FC5200?style=for-the-badge&logo=swift&logoColor=white)](https://github.com/Irs622/stridesync-ios)
[![Tests](https://img.shields.io/badge/Tests-81%2F81%20Passing%20(100%25)-2ECC71?style=for-the-badge)](https://github.com/Irs622/stridesync-ios)

**Website Promosi & Preview Interaktif Resmi untuk StrideSync iOS (v0.5.0-beta)**

🌐 **Live Website:** [https://stridesync-web.vercel.app](https://stridesync-web.vercel.app)  
📱 **Repositori iOS App:** [https://github.com/Irs622/stridesync-ios](https://github.com/Irs622/stridesync-ios)

</div>

---

## 📖 Tentang StrideSync Web

**StrideSync Web** adalah aplikasi web promosi interaktif generasi baru untuk aplikasi pelacak lari **StrideSync iOS**. Didesain dengan palet warna oranye energik dan putih bersih (*Warm Energetic Orange & Crisp White Geometric Aesthetic*), website ini memberikan pengalaman uji coba langsung berbagai modul analitik performa atletik secara live di browser tanpa perlu mengunduh aplikasi terlebih dahulu.

---

## 🌟 Fitur Interaktif & Modul Unggulan

### 1. ⏱️ Real-Time Cadence Metronome (Web Audio API)
- Generator suara ketukan (*woodblock click*) presisi tinggi pada **150 – 210 SPM (Steps Per Minute)**.
- Visualisasi cincin berdenyut (*pulse ring*) secara real-time untuk melatih irama langkah optimal (**180 SPM Gold Standard**).
- Panduan efisiensi biomekanika untuk meminimalkan beban impak pada persendian lutut.

### 2. ⛰️ Interactive GPX Elevation & Route Canvas
- HTML5 Canvas dinamis dengan 25 titik telemetri rute lari 5 km nyata.
- **Interactive Scrubber**: Geser kursor/jari di atas grafik untuk melihat **Jarak (km)**, **Ketinggian/Altitude (m)**, **Grade Kemiringan (%)**, **Pace Sesaat**, dan **Detak Jantung (BPM)** secara instan.
- Deteksi otomatis tanjakan standar **UCI Cat 4**.

### 3. ⚡️ Structured Interval Workout Ladder Builder
- Visualisasi tahapan latihan interval terstruktur (*Warmup ➔ Hard Phase ➔ Recovery Float ➔ Cooldown*).
- Pilihan program: **5K Speed Ladder**, **10K Lactate Threshold Blocks**, dan **VO2 Max 10x400m Repeats**.
- Dilengkapi target pace spesifik per repetisi.

### 4. 🫁 Kalkulator VO2 Max & Riegel Race Predictor
- Menggunakan formula fisiologis **Jack Daniels VDOT** dan **Riegel Race Model**.
- Geser slider rekor 5K Anda untuk langsung mendapatkan kalkulasi:
  - Skor estimasi **VO2 Max** (ml/kg/min) beserta kategori kebugaran.
  - Prediksi waktu finish dan target pace untuk jarak **10K**, **Half Marathon (21.1 km)**, dan **Full Marathon (42.2 km)**.

### 5. 📱 iPhone 15 Pro Hardware Mockup (Multi-Tab Interactive)
- **Tab Live HUD**: Simulasi live workout dengan GPS timer, detak jantung dinamis, delta jarak ke *Ghost Runner*, dan *Audio Coach Cues*.
- **Tab Feed Komunitas**: Tampilan aktivitas lari atlet dengan fitur pemberian Kudos ❤️ dan rincian split.
- **Tab Climbs**: Analisis tanjakan terukur standar Strava/UCI.
- **Tab TRIMP Recovery**: Indikator kesiapan tubuh (*Body Readiness Gauge*) dan saran jam istirahat otot.

### 6. 📦 1-Klik Download .IPA & OTA Safari Installation
- **Direct Download**: Mengunduh langsung file paket aplikasi `StrideSync.ipa` (2.3 MB) untuk sideloading (AltStore, Sideloadly, TrollStore, Scarlet).
- **Apple OTA Safari Protocol**: Integrasi `itms-services://` dengan `manifest.plist` untuk instalasi Over-The-Air nirkabel.
- Panduan 3 langkah aktivasi *Trust Developer Profile* pada iOS Settings.

---

## 🛠️ Tech Stack & Arsitektur

| Kategori | Teknologi | Kegunaan |
|---|---|---|
| **Core Framework** | React 18 (`^18.3.1`) | Komponen UI reaktif & modular |
| **Build Tool** | Vite 6 (`^6.1.0`) | Fast HMR & optimasi bundle produksi (< 1.1 detik) |
| **Styling** | Tailwind CSS 3 (`^3.4.17`) | Utility-first styling dengan palet oranye geometris |
| **Icons** | Lucide React (`^0.475.0`) | Icon atletik, hardware, dan kontrol interaktif |
| **Audio Engine** | Web Audio API + SpeechSynthesis | Sintesis ketukan metronome & suara AI Coach |
| **Visual Effects** | HTML5 Canvas + Canvas Confetti | Visualisasi grafik GPX & efek selebrasi rekor |
| **Deployment** | Vercel Edge Network | Global CDN hosting dengan auto CI/CD |

---

## 📁 Struktur Direktori Proyek

```
stridesync-web/
├── public/
│   ├── app-icon.png               # Icon resmi StrideSync 1024x1024
│   ├── manifest.plist             # Apple OTA distribution manifest
│   └── downloads/
│       └── StrideSync.ipa         # Paket instalasi iOS (.IPA 2.3 MB)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx             # Navigation bar dengan trigger download modal
│   │   ├── Hero.jsx               # Hero section dengan heksagon & badge atletik
│   │   ├── PhoneSimulator.jsx     # Mockup iPhone 15 Pro interaktif 4-tab
│   │   ├── GPXRouteElevationCanvas.jsx # Canvas profil rute & elevasi GPX
│   │   ├── CadenceMetronomeWidget.jsx  # Audio metronome 180 SPM
│   │   ├── StructuredIntervalBuilder.jsx # Builder interval workout ladder
│   │   ├── RacePredictorCalculator.jsx # Kalkulator VO2 Max & prediksi lomba
│   │   ├── FeaturesGrid.jsx       # Grid kartu fitur dengan badge heksagonal
│   │   ├── TechStackShowcase.jsx  # Showcase arsitektur Swift 6 & iOS 18
│   │   ├── CTASection.jsx         # Call to action dengan konfeti selebrasi
│   │   ├── Footer.jsx             # Footer dengan tombol sosial sirkular
│   │   └── DownloadModal.jsx      # Modal download langsung .IPA & panduan OTA
│   ├── utils/
│   │   └── audioSynthesizer.js    # Web Audio API engine untuk beeps & clicks
│   ├── App.jsx                    # Root view orchestrator
│   ├── index.css                  # Custom styling & pattern dots
│   └── main.jsx                   # Entry point React
├── index.html                     # HTML entry dengan OpenGraph & Twitter Cards SEO
├── tailwind.config.js             # Konfigurasi warna theme orange & geometric shadows
├── vite.config.js                 # Konfigurasi Vite server & build
└── package.json
```

---

## 💻 Panduan Menjalankan Secara Lokal

### Prasyarat
- Node.js versi 18+ (Disarankan versi LTS atau terbaru).
- npm atau pnpm / yarn.

### Langkah Instalasi
```bash
# 1. Clone repositori
git clone https://github.com/Irs622/stridesync-web.git

# 2. Masuk ke folder proyek
cd stridesync-web

# 3. Install seluruh dependensi
npm install

# 4. Jalankan development server
npm run dev
```

Buka browser Anda di `http://localhost:3000`.

### Build untuk Produksi
```bash
npm run build
```
Output build akan tersimpan di folder `dist/` dan siap dideploy ke server statis mana pun.

---

## 🚀 Deployment ke Vercel

Proyek ini telah terkonfigurasi untuk **1-Klik Deploy ke Vercel**:

```bash
# Deploy langsung via Vercel CLI
npx vercel --prod
```

Setiap push ke branch `main` pada repositori GitHub akan secara otomatis memicu build dan deploy baru di Vercel.

---

## 📄 Lisensi & Kredit

- **Pembuat / Developer**: [Irsal Shydiq](https://github.com/Irs622)
- **Proyek Terkait**: [StrideSync iOS (Swift 6 & SwiftUI)](https://github.com/Irs622/stridesync-ios)
- Dibuat dengan ❤️ untuk komunitas atlet lari dan sepeda di seluruh dunia.
