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

// Menghitung total dan status kategori berdasarkan checkbox yang aktif.
function updateResult() {
  const checked = document.querySelectorAll(".menu-check:checked");

  let totalKalori = 0;
  let totalHarga = 0;
  const kategoriTerpenuhi = new Set();
  const menuTerpilih = [];

  checked.forEach(function (cb) {
    const id = Number(cb.dataset.id);
    const menu = MENU_DATA.find(function (m) { return m.id === id; });
    if (!menu) return;

    totalKalori += menu.calories;
    totalHarga += menu.price;
    kategoriTerpenuhi.add(menu.categoryKey);
    menuTerpilih.push(menu);
  });

  document.getElementById("total-kalori").textContent = totalKalori + " kkal";
  document.getElementById("total-harga").textContent = formatRupiah(totalHarga);

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

  // Badge muncul hanya jika kelima kategori sudah terpenuhi.
  const badge = document.getElementById("badge-seimbang");
  if (kategoriTerpenuhi.size === CATEGORIES.length) {
    badge.classList.add("show");
  } else {
    badge.classList.remove("show");
  }

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
