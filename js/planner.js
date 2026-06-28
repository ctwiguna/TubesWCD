// Logika halaman planner: membuat baris tabel dari MENU_DATA dan
// menghitung ulang hasil setiap kali ada checkbox yang berubah.

function formatRupiah(angka) {
  return "Rp " + angka.toLocaleString("id-ID");
}

// Membuat 26 baris tabel dari data menu.
function renderTable() {
  const tbody = document.getElementById("menu-tbody");

  MENU_DATA.forEach(function (menu) {
    const row = document.createElement("tr");

    const tdImg = document.createElement("td");
    const img = document.createElement("img");
    img.src = menu.img;
    img.alt = menu.name;
    img.className = "menu-thumb";
    img.loading = "lazy";
    tdImg.appendChild(img);

    const tdName = document.createElement("td");
    tdName.textContent = menu.name;
    tdName.className = "cell-name";

    const tdCat = document.createElement("td");
    tdCat.textContent = menu.categoryLabel;

    const tdCal = document.createElement("td");
    tdCal.textContent = menu.calories + " kkal";
    tdCal.className = "cell-num";

    const tdPrice = document.createElement("td");
    tdPrice.textContent = formatRupiah(menu.price);
    tdPrice.className = "cell-num";

    const tdCheck = document.createElement("td");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "menu-check";
    checkbox.dataset.id = menu.id;
    checkbox.addEventListener("change", updateResult);
    tdCheck.appendChild(checkbox);

    row.appendChild(tdImg);
    row.appendChild(tdName);
    row.appendChild(tdCat);
    row.appendChild(tdCal);
    row.appendChild(tdPrice);
    row.appendChild(tdCheck);

    tbody.appendChild(row);
  });
}

// Menghitung ulang seluruh panel hasil berdasarkan checkbox yang sedang aktif.
// Dipanggil tiap kali ada checkbox berubah, dan sekali saat halaman pertama dimuat.
function updateResult() {
  // Kumpulkan semua checkbox yang sedang dicentang.
  const checked = document.querySelectorAll(".menu-check:checked");

  // Akumulator hasil. kategoriTerpenuhi pakai Set agar kategori yang sama
  // tidak dihitung dua kali (mis. memilih 3 lauk tetap dihitung 1 kategori "lauk").
  let totalKalori = 0;
  let totalHarga = 0;
  const kategoriTerpenuhi = new Set();
  const menuTerpilih = [];

  // Telusuri tiap checkbox aktif: cocokkan ke data menu lewat id,
  // lalu jumlahkan kalori & harga serta catat kategorinya.
  checked.forEach(function (cb) {
    const id = Number(cb.dataset.id);
    const menu = MENU_DATA.find(function (m) { return m.id === id; });
    if (!menu) return; // jaga-jaga bila id tidak ditemukan di data

    totalKalori += menu.calories;
    totalHarga += menu.price;
    kategoriTerpenuhi.add(menu.categoryKey); // pakai categoryKey (logika), bukan label tampilan
    menuTerpilih.push(menu);
  });

  // Tulis total kalori & harga ke panel hasil.
  document.getElementById("total-kalori").textContent = totalKalori + " kkal";
  document.getElementById("total-harga").textContent = formatRupiah(totalHarga);

  // Perbarui status tiap kategori di checklist:
  // "done" bila minimal satu item kategori itu dipilih, selain itu "pending".
  CATEGORIES.forEach(function (cat) {
    const el = document.querySelector('[data-cat="' + cat.key + '"]');
    if (kategoriTerpenuhi.has(cat.key)) {
      el.classList.add("done");
      el.classList.remove("pending");
    } else {
      el.classList.add("pending");
      el.classList.remove("done");
    }
  });

  // Badge "Menu Seimbang" hanya tampil ketika kelima kategori terpenuhi.
  // Set.size = jumlah kategori unik yang terpilih; CATEGORIES.length = 5.
  const badge = document.getElementById("badge-seimbang");
  if (kategoriTerpenuhi.size === CATEGORIES.length) {
    badge.classList.add("show");
  } else {
    badge.classList.remove("show");
  }

  // Tampilkan tumpukan gambar menu yang dipilih (atau state kosong bila tidak ada).
  renderStack(menuTerpilih);
}

// Menampilkan kumpulan gambar menu yang dipilih, atau state kosong.
function renderStack(menuTerpilih) {
  const stack = document.getElementById("image-stack");
  const emptyState = document.getElementById("empty-state");

  stack.innerHTML = "";

  if (menuTerpilih.length === 0) {
    emptyState.style.display = "block";
    stack.style.display = "none";
    return;
  }

  emptyState.style.display = "none";
  stack.style.display = "grid";

  menuTerpilih.forEach(function (menu) {
    const fig = document.createElement("figure");
    fig.className = "stack-item";

    const img = document.createElement("img");
    img.src = menu.img;
    img.alt = menu.name;

    const cap = document.createElement("figcaption");
    cap.textContent = menu.name;

    fig.appendChild(img);
    fig.appendChild(cap);
    stack.appendChild(fig);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  renderTable();
  updateResult();
});