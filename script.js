
:root{
  --bg:#f6f8f5;
  --surface:#ffffff;
  --ink:#17231c;
  --muted:#65736a;
  --line:#dce5de;
  --green:#1d6b45;
  --green2:#2d8a5c;
  --deep:#10271c;
  --active:#00A600;
  --fallow:#D4C600;
  --noncrop:#D7301F;
  --radius:20px;
  --shadow:0 14px 40px rgba(16,39,28,.08);
}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{
  margin:0;
  font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
  color:var(--ink);
  background:var(--bg);
  line-height:1.65;
}
img{max-width:100%;display:block}
a{color:inherit}
.wrap{width:min(1120px,calc(100% - 40px));margin:auto}
.hero{
  min-height:78vh;
  color:white;
  background:
    linear-gradient(90deg,rgba(6,28,18,.90) 0%,rgba(7,34,22,.78) 45%,rgba(7,31,20,.45) 100%),
    url("assets/hero-background.png") center center / cover no-repeat;
  background-color:#10271c;
}
.nav{
  min-height:74px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  border-bottom:1px solid rgba(255,255,255,.12);
}
.brand{font-weight:800;text-decoration:none;letter-spacing:.02em}
.nav-links{display:flex;gap:22px}
.nav-links a{font-size:.92rem;text-decoration:none;color:rgba(255,255,255,.82)}
.nav-links a:hover{color:white}
.menu-btn{display:none;background:none;border:0;color:white;font-size:1.5rem}
.hero-content{padding:110px 0 120px}
.eyebrow{
  margin:0 0 10px;
  text-transform:uppercase;
  letter-spacing:.15em;
  font-size:.76rem;
  font-weight:800;
  color:#74b98d;
}
.hero h1{max-width:850px;font-size:clamp(2.5rem,6vw,5rem);line-height:1.02;margin:0 0 20px}
.hero-sub{font-size:1.2rem;color:rgba(255,255,255,.75);margin-bottom:28px}
.hero-badges{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:35px}
.hero-badges span{border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.07);padding:8px 13px;border-radius:999px;font-size:.86rem}
.button{display:inline-block;background:white;color:#163c28;padding:12px 18px;border-radius:10px;text-decoration:none;font-weight:800}
.section{padding:88px 0}
.soft{background:#edf3ee}
.dark{background:var(--deep);color:white}
.section-heading{margin-bottom:36px}
.section-heading h2{font-size:clamp(1.9rem,4vw,3rem);line-height:1.1;margin:0}
.section-heading>p:last-child{max-width:780px;color:var(--muted)}
.section-heading.light>p:last-child{color:rgba(255,255,255,.7)}
.two-col{display:grid;grid-template-columns:1.1fr .9fr;gap:34px;align-items:start}
.question-card,.conclusion-card,.result-callout,.notice{
  padding:28px;border-radius:var(--radius);background:var(--surface);box-shadow:var(--shadow)
}
.question-card{border-left:5px solid var(--green)}
.question-card span{font-size:.75rem;text-transform:uppercase;letter-spacing:.12em;font-weight:800;color:var(--green)}
.question-card p{font-size:1.18rem;margin-bottom:0}
.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:42px}
.stats article{background:white;border:1px solid var(--line);padding:22px;border-radius:16px}
.stats strong{display:block;font-size:1.65rem;color:var(--green)}
.stats span{font-size:.85rem;color:var(--muted)}
.small-note{font-size:.82rem;color:var(--muted)}
.cards{display:grid;gap:18px}
.cards.three{grid-template-columns:repeat(3,1fr)}
.card,.paper,.chart-card{
  background:white;border:1px solid var(--line);border-radius:var(--radius);padding:26px
}
.card h3,.chart-card h3{margin-top:0}
.data-strip{margin-top:22px;display:flex;flex-wrap:wrap;gap:10px}
.data-strip span{background:white;border:1px solid var(--line);padding:9px 12px;border-radius:999px;font-size:.84rem}
.workflow{display:flex;align-items:center;gap:9px;overflow-x:auto;padding:14px 2px 24px}
.workflow div{min-width:max-content;padding:12px 15px;background:white;border:1px solid var(--line);border-radius:12px;font-weight:700;font-size:.86rem}
.workflow span{color:var(--green);font-weight:900}
.step{display:inline-grid;place-items:center;width:34px;height:34px;border-radius:50%;background:#e5f1e9;color:var(--green);font-weight:900}
#mapCanvas{height:540px;border-radius:18px}
.map-shell{background:white;padding:8px;border-radius:22px;color:var(--ink)}
.map-message{padding:12px 14px;font-size:.84rem;color:var(--muted)}
.legend{display:flex;gap:20px;flex-wrap:wrap;margin-top:18px}
.legend span{display:flex;align-items:center;gap:8px}
.swatch{width:15px;height:15px;border-radius:4px;display:inline-block}
.swatch.active{background:var(--active)}
.swatch.fallow{background:var(--fallow)}
.swatch.noncrop{background:var(--noncrop)}
.layout-figure{margin:0;background:white;padding:12px;border:1px solid var(--line);border-radius:var(--radius);box-shadow:var(--shadow)}
.layout-figure img{width:100%;border-radius:12px}
.layout-figure figcaption{padding:14px 10px 6px;color:var(--muted);font-size:.9rem}
.chart-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px}
.chart-sub{margin-top:-8px;color:var(--muted);font-size:.84rem}
.bar-chart{display:grid;gap:18px;margin-top:28px}
.bar-row{display:grid;grid-template-columns:170px 1fr 90px;gap:12px;align-items:center}
.bar-label{font-size:.82rem;font-weight:700}
.bar-track{height:18px;background:#e8ece9;border-radius:999px;overflow:hidden}
.bar-fill{height:100%;border-radius:999px}
.bar-value{text-align:right;font-weight:800;font-size:.86rem}
.table-wrap{margin-top:28px;background:white;border:1px solid var(--line);border-radius:var(--radius);padding:24px;overflow:auto}
table{width:100%;border-collapse:collapse;min-width:620px}
th,td{padding:13px;border-bottom:1px solid var(--line);text-align:center}
th:first-child,td:first-child{text-align:left}
thead th{font-size:.82rem;color:var(--muted)}
.correct{font-weight:900;background:#e7f4eb}
.result-callout{margin-top:28px;border-left:5px solid var(--green)}
.result-callout p{margin-bottom:0}
.notice{border:1px solid #e1c968;background:#fffbed}
.notice p{margin-bottom:0}
.paper-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:12px}
.paper{padding:20px}
.paper p{font-size:.86rem;color:var(--muted);margin-bottom:0}
.clean-list{padding-left:20px}
.clean-list li{margin-bottom:9px}
.conclusion-card{background:#e8f3eb}
.project-meta{display:grid;grid-template-columns:1.2fr .8fr;gap:30px}
.project-meta h2{font-size:2.2rem;margin:0}
.project-meta p{color:rgba(255,255,255,.72)}
footer{background:#09160f;color:rgba(255,255,255,.72);padding:25px 0}
.footer-inner{display:flex;justify-content:space-between;gap:20px;font-size:.85rem}
.footer-inner a{color:white;text-decoration:none}

@media(max-width:900px){
  .stats{grid-template-columns:1fr 1fr}
  .cards.three,.paper-grid{grid-template-columns:1fr 1fr}
  .two-col,.chart-grid,.project-meta{grid-template-columns:1fr}
}
@media(max-width:680px){
  .wrap{width:min(100% - 26px,1120px)}
  .section{padding:62px 0}
  .hero-content{padding:80px 0}
  .menu-btn{display:block}
  .nav-links{display:none;position:absolute;top:68px;left:13px;right:13px;background:#173d29;padding:18px;border-radius:14px;flex-direction:column}
  .nav-links.open{display:flex}
  .stats,.cards.three,.paper-grid{grid-template-columns:1fr}
  .bar-row{grid-template-columns:110px 1fr 70px}
  #mapCanvas{height:430px}
  .footer-inner{flex-direction:column}
}

.gee-map-link{
  display:inline-block;
  margin-left:8px;
  color:var(--green);
  font-weight:800;
  text-decoration:none;
}
.gee-map-link:hover{text-decoration:underline}

.gee-embed-shell{
  overflow:hidden;
}
.gee-embed{
  display:block;
  width:100%;
  height:620px;
  border:0;
  border-radius:16px;
  background:#eef2ef;
}
@media(max-width:680px){
  .gee-embed{height:520px}
}
