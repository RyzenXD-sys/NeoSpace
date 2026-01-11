const STORAGE_KEY = "PACKAGES_DATA";

// init data
function loadPackages() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : DEFAULT_PACKAGES;
}

function savePackages(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// toggle admin mode
function toggleAdmin() {
  document.body.classList.toggle("admin");
}

// update price realtime
function updatePrice(id, value) {
  const data = loadPackages();
  const pkg = data.find(p => p.id === id);
  pkg.price = value ? Number(value) : null;
  savePackages(data);
  render();
}
