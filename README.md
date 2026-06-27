# 🐙 Gurita Vape Store

Aplikasi e-commerce vape store berbasis Flutter + Firebase.  
Dibuat untuk tugas mata kuliah Mobile Programming.

---

## 📱 Fitur Aplikasi

| Fitur | Status |
|---|---|
| Login & Register | ✅ |
| Katalog Produk | ✅ |
| Detail Produk + Pilih Rasa | ✅ |
| Wishlist / Favorit | ✅ |
| Keranjang Belanja | ✅ |
| Checkout + Pilih Pembayaran | ✅ |
| Riwayat Pesanan | ✅ |
| Admin Panel (CRUD Produk) | ✅ |
| Admin Manajemen Pesanan | ✅ |

---

## 🗂️ Struktur Project

```
lib/
├── main.dart                    # Entry point + routing
├── firebase_options.dart        # Konfigurasi Firebase (ISI INI)
├── theme/
│   └── app_theme.dart          # Tema dark + warna
├── models/
│   ├── product_model.dart
│   ├── user_model.dart
│   └── order_model.dart
├── services/
│   ├── auth_service.dart
│   ├── product_service.dart
│   └── order_service.dart
├── providers/
│   ├── auth_provider.dart      # State management auth
│   └── cart_provider.dart      # State management cart
├── widgets/
│   └── common_widgets.dart     # Widget reusable
├── utils/
│   └── format_utils.dart       # Format Rupiah, tanggal, dll
└── screens/
    ├── auth/
    │   ├── login_screen.dart
    │   └── register_screen.dart
    ├── home/
    │   ├── home_screen.dart    # Main screen + bottom nav
    │   └── home_tab.dart       # Tab beranda
    ├── product/
    │   ├── catalog_screen.dart
    │   └── product_detail_screen.dart
    ├── cart/
    │   └── cart_screen.dart
    ├── checkout/
    │   └── checkout_screen.dart
    ├── order/
    │   └── order_history_screen.dart
    ├── wishlist/
    │   └── wishlist_screen.dart
    └── admin/
        ├── admin_screen.dart
        └── admin_product_form.dart
```

---

## ⚙️ Cara Setup

### 1. Install Flutter
Pastikan Flutter sudah terinstall. Cek dengan:
```bash
flutter doctor
```

### 2. Clone / Copy Project
Copy seluruh folder `gurita_vape_store` ke direktori kerjamu.

### 3. Install Dependencies
```bash
cd gurita_vape_store
flutter pub get
```

### 4. Setup Firebase

#### a. Buat Project Firebase
1. Buka [Firebase Console](https://console.firebase.google.com)
2. Klik **Add Project** → beri nama `gurita-vape-store`
3. Enable Google Analytics (opsional)

#### b. Tambah Aplikasi Android
1. Di Firebase Console → **Project Settings** → **Add App** → Android
2. Package name: `com.example.gurita_vape_store`
3. Download `google-services.json`
4. Taruh di folder `android/app/`

#### c. Aktifkan Firebase Services
Di Firebase Console:
- **Authentication** → Sign-in method → aktifkan **Email/Password**
- **Firestore Database** → Create database → pilih mode **test** (development) atau **production** (pakai rules)
- Upload `firestore.rules` ke Firestore Rules

#### d. Konfigurasi `firebase_options.dart`
**Cara otomatis (recommended):**
```bash
# Install FlutterFire CLI
dart pub global activate flutterfire_cli

# Login ke Firebase
firebase login

# Generate konfigurasi
flutterfire configure
```

**Cara manual:**
Buka `lib/firebase_options.dart` dan isi semua value `YOUR_...` dengan data dari Firebase Console → Project Settings.

### 5. Jalankan Aplikasi
```bash
flutter run
```

---

## 🌱 Isi Data Awal (Seed Data)

### Cara 1: Manual via Firebase Console
Buka Firestore → Collection `products` → tambah dokumen manual.

### Cara 2: Script Node.js
```bash
# Install dependency
npm install firebase-admin

# Download Service Account Key dari:
# Firebase Console → Project Settings → Service Accounts → Generate new private key
# Simpan sebagai serviceAccountKey.json di folder root project

# Jalankan seed
node seed_data.js
```

---

## 👤 Buat Akun Admin

Setelah register akun biasa:
1. Buka **Firestore Console**
2. Buka collection `users`
3. Cari dokumen dengan UID akun kamu
4. Edit field `role` dari `"user"` menjadi `"admin"`

Sekarang kamu bisa akses Admin Panel lewat icon di beranda.

---

## 🗃️ Struktur Firestore

### Collection: `products`
```
{
  name: string,
  description: string,
  price: number,
  originalPrice: number | null,
  imageUrl: string,
  category: string,       // "Pod" | "Mod" | "Liquid" | "Coil" | "Accessories"
  brand: string,
  rating: number,
  reviewCount: number,
  stock: number,
  flavors: string[],
  specs: map,
  isNew: boolean,
  isFeatured: boolean,
  createdAt: timestamp
}
```

### Collection: `users`
```
{
  email: string,
  name: string,
  phone: string,
  role: string,           // "user" | "admin"
  wishlist: string[],     // array of product IDs
  addresses: array,
  createdAt: timestamp
}
```

### Collection: `orders`
```
{
  userId: string,
  items: array,
  subtotal: number,
  shippingCost: number,
  total: number,
  shippingAddress: string,
  recipientName: string,
  recipientPhone: string,
  paymentMethod: string,
  status: string,         // "pending" | "processing" | "shipped" | "delivered" | "cancelled"
  notes: string | null,
  createdAt: timestamp,
  updatedAt: timestamp | null
}
```

---

## 🎨 Design System

| Token | Value |
|---|---|
| Primary | `#00E5FF` (Cyan neon) |
| Accent | `#FF6B35` (Orange ember) |
| Background | `#0A0A0F` (Near black) |
| Surface | `#141420` |
| Card | `#1E1E2E` |
| Font | Space Grotesk |

---

## 📦 Dependencies

| Package | Kegunaan |
|---|---|
| `firebase_core` | Firebase initialization |
| `firebase_auth` | Authentication |
| `cloud_firestore` | Database |
| `firebase_storage` | Image storage |
| `provider` | State management |
| `google_fonts` | Space Grotesk font |
| `cached_network_image` | Image caching |
| `intl` | Format Rupiah & tanggal |
| `uuid` | Generate unique ID |
| `image_picker` | Pilih gambar dari gallery |

---

## 🚀 Tips Pengembangan Selanjutnya

- [ ] Tambah **Google Sign-In**
- [ ] Integrasi **midtrans** / **xendit** untuk pembayaran real
- [ ] Tambah **notifikasi push** (Firebase Messaging)
- [ ] Tambah **review & rating** produk
- [ ] Tambah **promo code / voucher**
- [ ] Tambah **Firebase Storage** untuk upload foto produk dari admin
- [ ] Implementasi **deep link** untuk share produk

---

*Dibuat dengan ❤️ untuk Gurita Vape Store*
