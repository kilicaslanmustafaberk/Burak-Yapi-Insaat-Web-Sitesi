/* ========== BURAK YAPI & İNŞAAT – SHARED COMPONENTS ========== */
/* Navbar, Footer ve WhatsApp butonunu tüm sayfalara inject eder. */

/**
 * Navbar'ı oluşturur.
 * @param {string} activePage - "home" | "404" | "kvkk" | "tesekkurler"
 */
function loadNavbar(activePage) {
  const ph = document.getElementById('navbar-placeholder');
  if (!ph) return;

  const isHome = activePage === 'home';
  const logoHref = isHome ? '#home' : 'index.html';
  const servicesHref = isHome ? '#services' : 'index.html#services';
  const processHref = isHome ? '#process' : 'index.html#process';
  const portfolioHref = isHome ? '#portfolio' : 'index.html#portfolio';
  const contactHref = isHome ? '#contact' : 'index.html#contact';

  ph.innerHTML = `
    <div class="nav-overlay" id="navOverlay"></div>

    <nav class="mobile-nav" id="mobileNav">
      <ul>
        <li><a href="${logoHref}" class="mobile-nav-link">Giriş</a></li>
        <li><a href="${servicesHref}" class="mobile-nav-link">Uzmanlık</a></li>
        <li><a href="${processHref}" class="mobile-nav-link">Sürecimiz</a></li>
        <li><a href="${portfolioHref}" class="mobile-nav-link">Projeler</a></li>
        <li><a href="${contactHref}" class="mobile-nav-link">İletişim</a></li>
      </ul>
      <div class="mobile-nav-cta">
        <button class="open-modal-btn">
          <i class="fas fa-envelope-open-text"></i>
          Teklif Alın
        </button>
      </div>
    </nav>

    <header id="main-header">
      <a href="${logoHref}" class="logo-container">
        <img src="assets/logo/pnglogo.png" alt="Burak Yapı Logo" class="logo-img" />
        <div class="logo-text">BURAK<span>YAPI</span></div>
      </a>
      <nav>
        <ul>
          <li><a href="${logoHref}">Giriş</a></li>
          <li><a href="${servicesHref}">Uzmanlık</a></li>
          <li><a href="${processHref}">Sürecimiz</a></li>
          <li><a href="${portfolioHref}">Projeler</a></li>
          <li><a href="${contactHref}">İletişim</a></li>
        </ul>
      </nav>
      <div class="header-cta">
        <button class="btn-premium btn-gold open-modal-btn nav-cta-btn">
          Teklif Alın
        </button>
        <button class="hamburger" id="hamburger" aria-label="Menü Aç/Kapat">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>`;

  // Hamburger menu logic
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  const navOverlay = document.getElementById('navOverlay');

  function openMenu() {
    hamburger.classList.add('open');
    mobileNav.classList.add('open');
    navOverlay.classList.add('open');
    navOverlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    hamburger.classList.remove('open');
    mobileNav.classList.remove('open');
    navOverlay.classList.remove('open');
    setTimeout(() => { navOverlay.style.display = 'none'; }, 400);
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => {
    mobileNav.classList.contains('open') ? closeMenu() : openMenu();
  });
  navOverlay.addEventListener('click', closeMenu);
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Header scroll effect
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 80);
  });
  // Apply on load in case page is already scrolled
  header.classList.toggle('scrolled', window.scrollY > 80);
}

/**
 * Footer'ı oluşturur.
 */
function loadFooter() {
  const ph = document.getElementById('footer-placeholder');
  if (!ph) return;

  ph.innerHTML = `
    <footer id="contact">
      <div class="footer-main">
        <div class="footer-logo">
          <div class="logo-text">BURAK<span>YAPI</span></div>
          <p>
            Türkiye'nin her noktasında yaşanabilir, güvenli ve modern alanlar
            inşa ediyoruz. Kalite ve güvenin adresi.
          </p>

        </div>

        <div class="footer-links">
          <h5>Bağlantılar</h5>
          <ul>
            <li><a href="index.html#home">Giriş Sayfası</a></li>
            <li><a href="index.html#services">Hizmetlerimiz</a></li>
            <li><a href="index.html#portfolio">Projelerimiz</a></li>
            <li><a href="kvkk.html">Gizlilik & KVKK</a></li>
          </ul>
        </div>

        <div class="footer-contact">
          <h5>İletişim Kanalları</h5>
          <div class="contact-unit">
            <i class="fas fa-phone-alt"></i>
            <div>
              <h6>Hüsamettin Çırakoğlu</h6>
              <p><a href="tel:+905356086320">0535 608 6320</a></p>
            </div>
          </div>
          <div class="contact-unit">
            <i class="fas fa-phone-alt"></i>
            <div>
              <h6>Burak Çırakoğlu</h6>
              <p><a href="tel:+905364481906">0536 448 1906</a></p>
            </div>
          </div>
          <div class="contact-unit">
            <i class="fas fa-envelope-open"></i>
            <div>
              <h6>E-Posta Adresi</h6>
              <p>
                <a href="mailto:insaatburakyapi@gmail.com">insaatburakyapi@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright">
        © 2026 Burak Yapı & İnşaat. Tüm Hakları Saklıdır. | Excellence in Engineering
        <br>
        <span style="font-size: 0.75rem; opacity: 0.6; margin-top: 6px; display: inline-block;">
          Powered By <a href="https://skyframedijital.com.tr" target="_blank" rel="noopener noreferrer" style="color: var(--secondary); text-decoration: none;">SkyFrame Dijital</a>
        </span>
      </div>
    </footer>`;
}

/**
 * WhatsApp ve Instagram floating butonlarını oluşturur.
 */
function loadFloatingSocials() {
  let ph = document.getElementById('floating-socials-container');
  if (!ph) {
    ph = document.createElement('div');
    ph.id = 'floating-socials-container';
    document.body.appendChild(ph);
  }

  ph.innerHTML = `
    <div class="floating-socials">
      <a
        href="https://wa.me/905364481906"
        class="wa-float floating-btn"
        target="_blank"
        aria-label="WhatsApp ile İletişim"
      >
        <span>WhatsApp ile Ulaşın</span>
        <i class="fab fa-whatsapp"></i>
      </a>
      <a
        href="https://www.instagram.com/burakyapi_insaat"
        class="ig-float floating-btn"
        target="_blank"
        aria-label="Instagram'da Takip Edin"
      >
        <span>Bizi Takip Edin</span>
        <i class="fab fa-instagram"></i>
      </a>
    </div>`;
}

/**
 * İletişim modalını oluşturur.
 */
function loadContactModal() {
  const ph = document.getElementById('modal-placeholder');
  if (!ph) return;

  ph.innerHTML = `
    <div class="modal-overlay" id="contactModal">
      <div class="modal-content">
        <button class="modal-close" id="closeModal" aria-label="Kapat">×</button>
        <div class="modal-header">
          <h3>Projenizi Konuşalım</h3>
          <p>
            Hayalinizdeki projeyi hayata geçirmek için bize detayları iletin,
            uzman ekibimiz en kısa sürede dönüş yapsın.
          </p>
        </div>
        <form id="quoteForm">
          <div class="form-group">
            <label for="name">Adınız Soyadınız</label>
            <input
              type="text"
              id="name"
              name="name"
              class="form-control"
              placeholder="Örn: Ahmet Yılmaz"
              autocomplete="name"
              required
            />
          </div>
          <div class="form-group">
            <label for="phone">Telefon Numaranız</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              class="form-control"
              placeholder="05XX XXX XX XX"
              autocomplete="tel"
              pattern="05[0-9]{9}"
              title="Lütfen 05XX XXX XX XX formatında 11 haneli numaranızı giriniz."
              required
            />
          </div>
          <div class="form-group">
            <label for="service">İlgilendiğiniz Hizmet</label>
            <select id="service" class="form-control" required>
              <option value="" disabled selected>
                Lütfen bir hizmet seçin
              </option>
              <option value="Anahtar Teslim İnşaat">
                Anahtar Teslim İnşaat
              </option>
              <option value="Lüks Dekorasyon">Dekorasyon</option>
              <option value="Modern Restorasyon">Modern Restorasyon</option>
              <option value="Diğer">Diğer Projeler</option>
            </select>
          </div>
          <div class="form-group">
            <label for="message">Proje Detayları</label>
            <textarea
              id="message"
              class="form-control"
              placeholder="Bize biraz projenizden bahsedin..."
              required
            ></textarea>
          </div>
          <div class="form-checkbox-group">
            <input type="checkbox" id="kvkk" required />
            <label for="kvkk">
              <a href="kvkk.html" target="_blank">KVKK Aydınlatma Metni</a>'ni okudum ve verilerimin işlenmesini onaylıyorum.
            </label>
          </div>
          <div class="form-privacy-note">
            <i class="fas fa-lock"></i> Verileriniz veritabanımızda saklanmaz, doğrudan WhatsApp üzerinden iletilir.
          </div>
          <button type="submit" class="btn-premium btn-gold modal-btn">
            <i class="fas fa-paper-plane"></i> Formu Gönder
          </button>
        </form>
      </div>
    </div>`;

  // Modal logic
  const modal = document.getElementById('contactModal');
  const closeModalBtn = document.getElementById('closeModal');

  document.querySelectorAll('.open-modal-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('active');
      const mobileNav = document.getElementById('mobileNav');
      if (mobileNav && mobileNav.classList.contains('open')) {
        document.getElementById('hamburger').classList.remove('open');
        mobileNav.classList.remove('open');
        const overlay = document.getElementById('navOverlay');
        if (overlay) {
          overlay.classList.remove('open');
          setTimeout(() => { overlay.style.display = 'none'; }, 400);
        }
      }
      document.body.style.overflow = 'hidden';
    });
  });

  closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  });
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // WhatsApp form submission
  document.getElementById('quoteForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;

    const whatsappMessage = `Merhaba Burak Yapı, web sitenizden yeni bir teklif talebi var:\n\n👤 *İsim:* ${name}\n📱 *Telefon:* ${phone}\n🏢 *İlgilenilen Hizmet:* ${service}\n📝 *Proje Detayı:* ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://api.whatsapp.com/send?phone=905364481906&text=${encodedMessage}`;

    const btn = this.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> WhatsApp Açılıyor...';
    btn.style.background = '#25d366';
    btn.style.color = '#fff';

    setTimeout(() => {
      window.open(whatsappURL, '_blank');
      window.location.href = 'tesekkurler.html';
      modal.classList.remove('active');
      document.body.style.overflow = '';
      this.reset();
      btn.innerHTML = originalText;
      btn.style.background = '';
      btn.style.color = '';
    }, 500);
  });
}

/**
 * Tüm bileşenleri yükler.
 * @param {string} activePage - "home" | "404" | "kvkk" | "tesekkurler"
 */
function initComponents(activePage) {
  loadNavbar(activePage || 'home');
  loadFooter();
  loadFloatingSocials();
  loadContactModal();
}
