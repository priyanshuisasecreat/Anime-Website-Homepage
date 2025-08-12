const menuButton = document.getElementById("mobile-menu-button");
      const navLinks = document.getElementById("nav-links");
      menuButton.addEventListener("click", () => {
        navLinks.classList.toggle("hidden");
      });

      document.addEventListener("DOMContentLoaded", function () {
        const particlesContainer = document.querySelector(".particles");
        if (particlesContainer) {
          const particleCount = 50;
          for (let i = 0; i < particleCount; i++) {
            let particle = document.createElement("div");
            particle.classList.add("particle");
            const size = Math.random() * 15 + 5;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
            particle.style.animationDelay = `${Math.random() * 10}s`;
            particlesContainer.appendChild(particle);
          }
        }
      });