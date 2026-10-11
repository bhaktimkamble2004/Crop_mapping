
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

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
