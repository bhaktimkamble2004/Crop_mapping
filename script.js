
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

const map = L.map("mapCanvas", { scrollWheelZoom: false }).setView([18.15, 74.58], 10);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

L.marker([18.15, 74.58])
  .addTo(map)
  .bindPopup("<b>Baramati</b><br>Pune District, Maharashtra<br>Project study region")
  .openPopup();

const rasterPath = "assets/Baramati_SAR_Classification_FINAL_2026.tif";
const status = document.getElementById("rasterStatus");

function classColor(value) {
  if (value === 1) return "#00A600";
  if (value === 2) return "#D4C600";
  if (value === 3) return "#D7301F";
  return null;
}

fetch(rasterPath, { method: "HEAD" })
  .then(res => {
    if (!res.ok) throw new Error("Raster not found");
    return fetch(rasterPath);
  })
  .then(res => res.arrayBuffer())
  .then(buffer => parseGeoraster(buffer))
  .then(georaster => {
    const layer = new GeoRasterLayer({
      georaster,
      opacity: 0.78,
      resolution: 128,
      pixelValuesToColorFn: values => classColor(Math.round(values[0]))
    });
    layer.addTo(map);
    map.fitBounds(layer.getBounds());
    L.control.layers(null, { "Final SAR Classification": layer }, { collapsed: false }).addTo(map);
    status.textContent = "Final SAR classification loaded. Use the layer control to show/hide it.";
  })
  .catch(() => {
    status.innerHTML =
      'GeoTIFF not included in this package. Add your final file as <code>assets/Baramati_SAR_Classification_FINAL_2026.tif</code> and the classified layer will load here automatically.';
  });

function renderBars(id, rows, max, unit) {
  const el = document.getElementById(id);
  rows.forEach(row => {
    const wrap = document.createElement("div");
    wrap.className = "bar-row";
    wrap.innerHTML = `
      <div class="bar-label">${row.label}</div>
      <div class="bar-track"><div class="bar-fill" style="width:${(row.value/max)*100}%;background:${row.color}"></div></div>
      <div class="bar-value">${row.display}${unit}</div>
    `;
    el.appendChild(wrap);
  });
}

renderBars("areaChart", [
  {label:"Active Cropland", value:10355.87, display:"10,355.87", color:"#00A600"},
  {label:"Fallow Field", value:1537.44, display:"1,537.44", color:"#D4C600"},
  {label:"Non-Cropland", value:3613.23, display:"3,613.23", color:"#D7301F"}
], 10355.87, " ha");

renderBars("accuracyChart", [
  {label:"Active Cropland", value:90.3, display:"90.3", color:"#00A600"},
  {label:"Fallow Field", value:42.1, display:"42.1", color:"#D4C600"},
  {label:"Non-Cropland", value:77.7, display:"77.7", color:"#D7301F"}
], 100, "%");
