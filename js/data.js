// Data menu untuk aplikasi. 26 item sesuai ketentuan tugas.
// categoryKey dipakai logika (5 nilai: pokok/lauk/sayur/buah/minuman),
// categoryLabel dipakai untuk ditampilkan di tabel.

const MENU_DATA = [
  // Makanan Pokok
  { id: 1,  name: "Nasi Putih",            categoryKey: "pokok",   categoryLabel: "Makanan Pokok", calories: 180, price: 5000,  img: "assets/img/nasi-putih.jpg" },
  { id: 2,  name: "Nasi Goreng Spesial",   categoryKey: "pokok",   categoryLabel: "Makanan Pokok", calories: 450, price: 18000, img: "assets/img/nasi-goreng.jpg" },
  { id: 3,  name: "Mie Goreng Jawa",       categoryKey: "pokok",   categoryLabel: "Makanan Pokok", calories: 380, price: 16000, img: "assets/img/mie-goreng.jpg" },
  { id: 4,  name: "Spaghetti Aglio Olio",  categoryKey: "pokok",   categoryLabel: "Makanan Pokok", calories: 420, price: 28000, img: "assets/img/spaghetti.jpg" },
  { id: 5,  name: "Kentang Panggang",      categoryKey: "pokok",   categoryLabel: "Makanan Pokok", calories: 220, price: 15000, img: "assets/img/kentang.jpg" },
  { id: 6,  name: "Roti Gandum (2 lembar)", categoryKey: "pokok",  categoryLabel: "Makanan Pokok", calories: 160, price: 8000,  img: "assets/img/roti-gandum.jpg" },

  // Lauk-Pauk
  { id: 7,  name: "Ayam Goreng Tepung",    categoryKey: "lauk",    categoryLabel: "Lauk-Pauk", calories: 300, price: 17000, img: "assets/img/ayam-goreng.jpg" },
  { id: 8,  name: "Ayam Bakar Madu",       categoryKey: "lauk",    categoryLabel: "Lauk-Pauk", calories: 280, price: 20000, img: "assets/img/ayam-bakar.jpg" },
  { id: 9,  name: "Rendang Daging Sapi",   categoryKey: "lauk",    categoryLabel: "Lauk-Pauk", calories: 380, price: 32000, img: "assets/img/rendang.jpg" },
  { id: 10, name: "Tempe Orek",            categoryKey: "lauk",    categoryLabel: "Lauk-Pauk", calories: 150, price: 8000,  img: "assets/img/tempe-orek.jpg" },
  { id: 11, name: "Tahu Goreng",           categoryKey: "lauk",    categoryLabel: "Lauk-Pauk", calories: 120, price: 6000,  img: "assets/img/tahu-goreng.jpg" },
  { id: 12, name: "Ikan Nila Bakar",       categoryKey: "lauk",    categoryLabel: "Lauk-Pauk", calories: 250, price: 22000, img: "assets/img/ikan-nila.jpg" },
  { id: 13, name: "Telur Dadar",           categoryKey: "lauk",    categoryLabel: "Lauk-Pauk", calories: 190, price: 7000,  img: "assets/img/telur-dadar.jpg" },
  { id: 14, name: "Beef Steak Sirloin",    categoryKey: "lauk",    categoryLabel: "Lauk-Pauk", calories: 420, price: 45000, img: "assets/img/beef-steak.jpg" },

  // Sayur
  { id: 15, name: "Tumis Kangkung",        categoryKey: "sayur",   categoryLabel: "Sayur", calories: 90,  price: 9000,  img: "assets/img/kangkung.jpg" },
  { id: 16, name: "Sayur Asem",            categoryKey: "sayur",   categoryLabel: "Sayur", calories: 70,  price: 8000,  img: "assets/img/sayur-asem.jpg" },
  { id: 17, name: "Capcay Kuah",           categoryKey: "sayur",   categoryLabel: "Sayur", calories: 110, price: 13000, img: "assets/img/capcay.jpg" },
  { id: 18, name: "Salad Sayur Segar",     categoryKey: "sayur",   categoryLabel: "Sayur", calories: 80,  price: 14000, img: "assets/img/salad.jpg" },
  { id: 19, name: "Gado-Gado",             categoryKey: "sayur",   categoryLabel: "Sayur", calories: 280, price: 16000, img: "assets/img/gado-gado.jpg" },

  // Buah
  { id: 20, name: "Pisang (1 buah)",       categoryKey: "buah",    categoryLabel: "Buah", calories: 105, price: 5000,  img: "assets/img/pisang.jpg" },
  { id: 21, name: "Apel Fuji (1 buah)",    categoryKey: "buah",    categoryLabel: "Buah", calories: 95,  price: 7000,  img: "assets/img/apel.jpg" },
  { id: 22, name: "Semangka (1 potong)",   categoryKey: "buah",    categoryLabel: "Buah", calories: 60,  price: 6000,  img: "assets/img/semangka.jpg" },
  { id: 23, name: "Fruit Salad Cup",       categoryKey: "buah",    categoryLabel: "Buah", calories: 140, price: 17000, img: "assets/img/fruit-salad.jpg" },

  // Minuman
  { id: 24, name: "Es Teh Manis",          categoryKey: "minuman", categoryLabel: "Minuman", calories: 90,  price: 5000,  img: "assets/img/es-teh.jpg" },
  { id: 25, name: "Air Mineral 600ml",     categoryKey: "minuman", categoryLabel: "Minuman", calories: 0,   price: 4000,  img: "assets/img/air-mineral.jpg" },
  { id: 26, name: "Jus Alpukat",           categoryKey: "minuman", categoryLabel: "Minuman", calories: 230, price: 18000, img: "assets/img/jus-alpukat.jpg" },
];

// Lima kategori penyusun menu seimbang. Urutan = urutan tampil checklist.
const CATEGORIES = [
  { key: "pokok",   label: "Makanan Pokok" },
  { key: "lauk",    label: "Lauk-Pauk" },
  { key: "sayur",   label: "Sayur" },
  { key: "buah",    label: "Buah" },
  { key: "minuman", label: "Minuman" },
];
