# Burak Yapı & İnşaat — Web Projesi

Burak Yapı & İnşaat kurumsal web sitesi. Anahtar teslim inşaat, lüks dekorasyon ve modern restorasyon hizmetleri.

## 🏗️ Dosya Yapısı

```
v1.1/
├── assets/
│   ├── logo/          → Logo dosyaları
│   └── images/        → Görseller (background, og-image)
├── index.html         → Ana sayfa
├── 404.html           → Özel hata sayfası
├── kvkk.html          → KVKK Aydınlatma Metni
├── tesekkurler.html   → Dönüşüm izleme sayfası
├── styles.css         → Ana stil dosyası
├── script.js          → Preloader, AOS, sayaç
├── components.js      → Modüler bileşenler (Navbar, Footer, WhatsApp, Modal)
├── manifest.json      → PWA yapılandırması
├── sw.js              → Service Worker (offline fallback)
├── vercel.json        → Deploy ayarları & güvenlik headers
├── robots.txt         → Arama motoru talimatları
├── sitemap.xml        → Site haritası
└── projects-data.json → Proje verileri (dinamik portfolio)
```

## 🚀 Yerel Geliştirme

```bash
npx serve .
```

## 📦 Deploy (Vercel)

```bash
vercel --prod
```

## 🛡️ Güvenlik

- **CSP Headers**: `vercel.json` içinde tanımlı
- **KVKK**: `kvkk.html` sayfasında aydınlatma metni mevcut
- **robots.txt**: `tesekkurler.html` sayfası indekslenmez

## 📝 Teknolojiler

- Vanilla HTML/CSS/JS (framework bağımsız)
- Font Awesome 6.4 (ikonlar)
- AOS (scroll animasyonları)
- Google Fonts (Plus Jakarta Sans, Syncopate)
- Google Tag Manager / Ads (dönüşüm takibi)

---

**Powered By [SkyFrame Dijital](https://skyframedijital.com.tr)**
