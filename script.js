/* ========== BURAK YAPI & İNŞAAT – MAIN SCRIPT ========== */
/* Preloader, AOS animasyonları ve sayaç mantığını yönetir. */

// Preloader
window.addEventListener("load", () => {
  setTimeout(() => {
    document.body.classList.add("loaded");
  }, 500);
});

// Init AOS (scroll animasyonları)
if (typeof AOS !== 'undefined') {
  AOS.init({
    duration: 800,
    once: true,
    offset: 60,
    disable: 'mobile', // Use AOS built-in mobile detection
  });
}

// Dinamik Sayaç (Counter)
const counters = document.querySelectorAll(".counter");
if (counters.length > 0) {
  const counterObserver = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = +counter.getAttribute("data-target");
          const speed = 200;
          const updateCount = () => {
            const count = +counter.innerText;
            const inc = target / speed;
            if (count < target) {
              counter.innerText = Math.ceil(count + inc);
              setTimeout(updateCount, 15);
            } else {
              counter.innerText = target;
            }
          };
          updateCount();
          observer.unobserve(counter);
        }
      });
    },
    { threshold: 0.5 },
  );

  counters.forEach((counter) => {
    counterObserver.observe(counter);
  });
}


// ==========================================
// Before/After Slider Logic
// ==========================================
const baRange = document.getElementById("baRange");
if (baRange) {
  const baAfter = document.querySelector(".ba-after");
  const baHandle = document.querySelector(".ba-handle");
  
  baRange.addEventListener("input", (e) => {
    const slideValue = e.target.value;
    baAfter.style.clipPath = `polygon(${slideValue}% 0, 100% 0, 100% 100%, ${slideValue}% 100%)`;
    baHandle.style.left = `${slideValue}%`;
  });
}

// ==========================================
// Dinamik Portfolyo Yükleme (Faz 4 Backend Hazırlık)
// ==========================================
const portfolioGrid = document.getElementById("portfolio-grid");
if (portfolioGrid) {
  fetch("projects-data.json")
    .then(response => response.json())
    .then(data => {
      portfolioGrid.innerHTML = "";
      
      data.forEach(project => {
        const delayAttr = project.delay ? `data-aos-delay="${project.delay}"` : "";
        
        // Çoklu görseller için galeri HTML oluştur
        let galleryHTML = "";
        if (project.images && project.images.length > 0) {
          galleryHTML = `
            <div class="project-gallery">
              ${project.images.map((img, idx) => `
                <div class="thumb-item ${idx === 0 ? 'active' : ''}" onclick="changeMainImage(this, '${img}')">
                  <img src="${img}" alt="${project.title} - ${idx + 1}">
                </div>
              `).join('')}
            </div>
          `;
        }

        const projectHTML = `
          <div class="work-card" data-aos="fade-up" ${delayAttr}>
            <div class="work-img-container">
              <img src="${project.image}" alt="${project.title}" id="main-img-${project.id}">
            </div>
            <div class="work-info">
              <h3>${project.title}</h3>
              <p class="project-cat">${project.category}</p>
              <p class="project-desc">${project.description}</p>
              ${galleryHTML}
            </div>
          </div>
        `;
        
        portfolioGrid.innerHTML += projectHTML;
      });

      // Refresh AOS to detect newly added items
      if (typeof AOS !== 'undefined') {
        AOS.refresh();
      }
    })
    .catch(error => {
      console.error("Projeler yüklenirken hata oluştu:", error);
      portfolioGrid.innerHTML = `<p style="color:white; text-align:center; padding: 20px;">Projeler şu anda yüklenemiyor.</p>`;
    });
}

// Resim Deiştirme Fonksiyonu
function changeMainImage(thumb, newSrc) {
  const card = thumb.closest('.work-card');
  const mainImg = card.querySelector('.work-img-container img');
  
  // Aktif sınıfları temizle ve yenisine ekle
  thumb.parentElement.querySelectorAll('.thumb-item').forEach(item => {
    item.classList.remove('active');
  });
  thumb.classList.add('active');
  
  // Ana resmi değiştir
  mainImg.style.opacity = '0.5';
  setTimeout(() => {
    mainImg.src = newSrc;
    mainImg.style.opacity = '1';
  }, 200);
}

// ==========================================
// FAQ Accordion Logic
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all other items
        faqItems.forEach(i => i.classList.remove('active'));
        
        // Toggle current item
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });
});

