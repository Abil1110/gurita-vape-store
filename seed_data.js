// Script untuk mengisi data awal produk di Firestore
// Jalankan sekali dari Firebase Console > Firestore atau pakai Node.js

// Cara pakai di browser console Firebase:
// 1. Buka Firebase Console
// 2. Pilih project kamu
// 3. Buka Firestore Database
// 4. Tambah dokumen secara manual, atau pakai script Node.js di bawah

// ── Node.js Script ────────────────────────────────────────────────────────────
// npm install firebase-admin
// node seed_data.js

const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json'); // Download dari Firebase Console

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const products = [
  {
    name: 'SMOK Nord 5',
    description: 'Pod system terbaru dari SMOK dengan baterai 2000mAh. Performa tinggi dengan teknologi mesh coil terdepan. Cocok untuk daily vaping dengan flavor production yang luar biasa.',
    price: 450000,
    originalPrice: 550000,
    imageUrl: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400',
    category: 'Pod',
    brand: 'SMOK',
    rating: 4.7,
    reviewCount: 128,
    stock: 25,
    flavors: [],
    specs: {
      'Baterai': '2000mAh',
      'Output': '5-80W',
      'Kapasitas': '5ml',
      'Coil': 'RPM 3 Mesh Coil',
    },
    isNew: true,
    isFeatured: true,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  },
  {
    name: 'Vaporesso XROS 3',
    description: 'Pod kompak dengan desain elegan. XROS 3 hadir dengan teknologi SSS leak-resistant untuk pengalaman vaping tanpa khawatir bocor.',
    price: 280000,
    originalPrice: null,
    imageUrl: 'https://images.unsplash.com/photo-1590953571806-64b1b0016f3d?w=400',
    category: 'Pod',
    brand: 'Vaporesso',
    rating: 4.8,
    reviewCount: 256,
    stock: 40,
    flavors: [],
    specs: {
      'Baterai': '1000mAh',
      'Output': '11-16W',
      'Kapasitas': '2ml',
      'Coil': 'Mesh 0.6Ω / 1.0Ω',
    },
    isNew: false,
    isFeatured: true,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  },
  {
    name: 'Lost Vape Thelema Quest',
    description: 'Box mod premium dengan chipset Quest 2.0. Layar 0.96 inch full color dengan tampilan yang intuitif. Material zinc alloy berkualitas tinggi.',
    price: 850000,
    originalPrice: 1000000,
    imageUrl: 'https://images.unsplash.com/photo-1611843467160-25afb8df1074?w=400',
    category: 'Mod',
    brand: 'Lost Vape',
    rating: 4.9,
    reviewCount: 89,
    stock: 15,
    flavors: [],
    specs: {
      'Baterai': '18650 x2',
      'Output': '5-200W',
      'Layar': '0.96" TFT',
      'Chipset': 'Quest 2.0',
    },
    isNew: true,
    isFeatured: true,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  },
  {
    name: 'Saltnic Gurita Mango Splash',
    description: 'Liquid eksklusif dari Gurita Vape Store. Perpaduan mangga manis segar dengan sentuhan mint yang menyegarkan. Nicotine salt 30mg/50mg.',
    price: 75000,
    originalPrice: null,
    imageUrl: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400',
    category: 'Liquid',
    brand: 'Gurita Original',
    rating: 4.6,
    reviewCount: 312,
    stock: 100,
    flavors: ['Mango Mint', 'Mango Ice', 'Mango Original'],
    specs: {
      'Kapasitas': '30ml',
      'Nikotin': '30mg / 50mg',
      'VG/PG': '50/50',
      'Tipe': 'Salt Nicotine',
    },
    isNew: false,
    isFeatured: true,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  },
  {
    name: 'Freebase Gurita Strawberry Lychee',
    description: 'Kolaborasi rasa stroberi segar bertemu buah leci eksotis. Smooth throat hit dengan cloud production maksimal.',
    price: 65000,
    originalPrice: null,
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
    category: 'Liquid',
    brand: 'Gurita Original',
    rating: 4.5,
    reviewCount: 198,
    stock: 80,
    flavors: ['Strawberry Lychee', 'Double Lychee', 'Double Strawberry'],
    specs: {
      'Kapasitas': '60ml',
      'Nikotin': '3mg / 6mg',
      'VG/PG': '70/30',
      'Tipe': 'Freebase',
    },
    isNew: true,
    isFeatured: false,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  },
  {
    name: 'Coil Master DIY Kit V3',
    description: 'Kit lengkap untuk DIY coil builder. Termasuk pinset, gunting, ceramic tweezer, coil jig, dan berbagai alat pendukung lainnya.',
    price: 185000,
    originalPrice: 220000,
    imageUrl: 'https://images.unsplash.com/photo-1609151354577-32f6e2b4bf50?w=400',
    category: 'Accessories',
    brand: 'Coil Master',
    rating: 4.4,
    reviewCount: 67,
    stock: 20,
    flavors: [],
    specs: {
      'Isi': '7 alat',
      'Material': 'Stainless Steel',
      'Casing': 'Zipper pouch',
    },
    isNew: false,
    isFeatured: false,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  },
  {
    name: 'Vandy Vape Mesh Coil 0.15Ω',
    description: 'Coil mesh berkualitas tinggi untuk rasa maksimal. Kompatibel dengan berbagai atomizer populer. Pack isi 5 pcs.',
    price: 55000,
    originalPrice: null,
    imageUrl: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=400',
    category: 'Coil',
    brand: 'Vandy Vape',
    rating: 4.7,
    reviewCount: 145,
    stock: 60,
    flavors: [],
    specs: {
      'Resistance': '0.15Ω',
      'Material': 'Mesh',
      'Power Range': '50-80W',
      'Isi': '5 pcs',
    },
    isNew: false,
    isFeatured: false,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  },
  {
    name: 'GeekVape Aegis Legend 2',
    description: 'Mod paling tangguh di kelasnya. IP67 waterproof, dustproof, dan shockproof. Chipset AS-3 dengan response time tercepat.',
    price: 1150000,
    originalPrice: 1300000,
    imageUrl: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400',
    category: 'Mod',
    brand: 'GeekVape',
    rating: 4.9,
    reviewCount: 203,
    stock: 10,
    flavors: [],
    specs: {
      'Baterai': '18650 x2',
      'Output': '5-200W',
      'Rating': 'IP67',
      'Chipset': 'AS-3',
    },
    isNew: false,
    isFeatured: true,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  },
];

async function seedProducts() {
  console.log('Seeding products...');
  const batch = db.batch();
  
  products.forEach((product) => {
    const ref = db.collection('products').doc();
    batch.set(ref, product);
  });

  await batch.commit();
  console.log(`✅ ${products.length} produk berhasil ditambahkan!`);
  process.exit(0);
}

seedProducts().catch(console.error);
