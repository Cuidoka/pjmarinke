// Enhanced Carousel Data
const carouselData = [
  {
      image: "./img/salamanderwatch2.jpeg",
      title: "Salamander Watch 3.9",
      description: "Relógio para os melhores anfíbios do PLANETA!",
      price: "9.999 V-BUCKS",
      features: ["Snapdragon 8 Gen 3", "Câmera Leica 66MP", "Tela AMOLED 32K"]
  },
  {
      image: "./img/CrocoBook.jpg",
      title: "CrocoBook",
      description: "Performance extraordinária para suas criações reptilianas",
      price: "R$ 29.990",
      features: ["Ryzen 10 2900X3D", "256GB RAM", "SSD 10TB"]
  },
  {
      image: "./img/SrAcessorio.jpg",
      title: "Sr.Acessórios",
      description: "Seu companheiro inteligente para cada momento, seu best <3!",
      price: "R$ 1.299",
      features: ["GPS Teleport", "Bateria 100 anos", "50+ Esportes"]
  },
  {
      image: "./img/Sonic.jpeg",
      title: "HeadSonic",
      description: "Som imersivo e moedas douradas",
      price: "R$ 399",
      features: ["Cancelamento de Ruído", "Bateria Velocidade da Luz", "Via sonda magnética"]
  }
];

// Enhanced Carousel Initialization
function initCarousel() {
  const carouselItems = document.querySelector('.carousel-items');
  const indicators = document.querySelector('.carousel-indicators');
  
  carouselData.forEach((item, index) => {
      const carouselItem = document.createElement('div');
      carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;
      
      carouselItem.innerHTML = `
          <div class="carousel-overlay"></div>
          <img src="${item.image}" alt="${item.title}">
          <div class="carousel-content">
              <h2 style="font-size: 4rem; font-weight: bold; margin-bottom: 1rem; text-shadow: 0 0 20px rgba(6, 182, 212, 0.5);">
                  ${item.title}
              </h2>
              <p style="font-size: 1.5rem; margin-bottom: 1rem; color: rgba(255, 255, 255, 0.9);">
                  ${item.description}
              </p>
              <div style="display: flex; justify-content: center; gap: 1rem; margin: 1.5rem 0;">
                  ${item.features.map(feature => `
                      <span style="background: rgba(255, 255, 255, 0.1); padding: 0.5rem 1rem; border-radius: 9999px; font-size: 0.9rem;">
                          ${feature}
                      </span>
                  `).join('')}
              </div>
              <p style="font-size: 2.5rem; font-weight: bold; color: #06b6d4; margin: 1.5rem 0; text-shadow: 0 0 20px rgba(6, 182, 212, 0.5);">
                  ${item.price}
              </p>
              <button class="btn-primary" style="font-size: 1.2rem; padding: 1rem 3rem;">
                  Comprar agora
              </button>
          </div>
      `;
      
      carouselItems.appendChild(carouselItem);
      
      const indicator = document.createElement('div');
      indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
      indicator.addEventListener('click', () => goToSlide(index));
      indicators.appendChild(indicator);
  });
}

// Enhanced Carousel Navigation
let currentSlide = 0;
let isAnimating = false;

function goToSlide(index) {
  if (isAnimating || currentSlide === index) return;
  isAnimating = true;

  const items = document.querySelectorAll('.carousel-item');
  const indicators = document.querySelectorAll('.indicator');
  
  items[currentSlide].classList.remove('active');
  indicators[currentSlide].classList.remove('active');
  
  currentSlide = index;
  
  items[currentSlide].classList.add('active');
  indicators[currentSlide].classList.add('active');

  setTimeout(() => {
      isAnimating = false;
  }, 1000);
}

function nextSlide() {
  if (isAnimating) return;
  const nextIndex = (currentSlide + 1) % carouselData.length;
  goToSlide(nextIndex);
}

// Enhanced Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
          });
      }
  });
});

// Enhanced Intersection Observer
const observerOptions = {
  threshold: 0.2,
  rootMargin: '-50px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.style.animation = 'slideUp 1s cubic-bezier(0.4, 0, 0.2, 1) forwards';
          observer.unobserve(entry.target);
      }
  });
}, observerOptions);

// Enhanced Scroll Animations
document.querySelectorAll('.product-section, .product-card').forEach(element => {
  element.style.opacity = '0';
  observer.observe(element);
});

// Enhanced Navbar Interaction
let lastScroll = 0;
const navbar = document.querySelector('.navbar');
const threshold = 50;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (Math.abs(currentScroll - lastScroll) < threshold) return;
  
  if (currentScroll > lastScroll && currentScroll > 100) {
      navbar.style.transform = 'translateY(-100%)';
  } else {
      navbar.style.transform = 'translateY(0)';
  }
  
  if (currentScroll > 100) {
      navbar.style.background = 'rgba(0, 0, 0, 0.95)';
  } else {
      navbar.style.background = 'rgba(0, 0, 0, 0.8)';
  }
  
  lastScroll = currentScroll;
});


// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initCarousel();
  setInterval(nextSlide, 5000);
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita o recarregamento da página

        // Exibir uma mensagem de sucesso (opcional)
        alert("Formulário enviado com sucesso! Redirecionando...");

        // Redirecionar para index.html após 2 segundos
        setTimeout(function () {
            window.location.href = "index.html";
        }, 2000);
    });
});
