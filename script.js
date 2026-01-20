/* ================= SMOOTH SCROLLING ================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);

    if (!target) return;

    const navHeight = document.querySelector(".navbar")?.offsetHeight || 0;
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: targetPosition - navHeight,
      behavior: "smooth"
    });
  });
});


/* ================= PRODUCT CAROUSEL ================= */

const productGrid = document.querySelector(".product-grid");
const prevBtn = document.querySelector(".carousel-prev");
const nextBtn = document.querySelector(".carousel-next");

if (productGrid && prevBtn && nextBtn) {
  const scrollAmount = 280;

  nextBtn.addEventListener("click", () => {
    productGrid.scrollBy({
      left: scrollAmount,
      behavior: "smooth"
    });
  });

  prevBtn.addEventListener("click", () => {
    productGrid.scrollBy({
      left: -scrollAmount,
      behavior: "smooth"
    });
  });
}


/* ================= ADD TO CART (BASIC) ================= */

let cartCount = 0;
const cartBtn = document.querySelector(".cart-btn");
const addToCartBtns = document.querySelectorAll(".product-card .primary-btn");

addToCartBtns.forEach(button => {
  button.addEventListener("click", () => {
    cartCount++;

    // Update cart button text
    cartBtn.textContent = `Cart (${cartCount})`;

    // Simple feedback animation
    button.textContent = "Added ✓";
    button.disabled = true;

    setTimeout(() => {
      button.textContent = "Add to Cart";
      button.disabled = false;
    }, 1200);
  });
});


/* ================= NAVBAR SHADOW ON SCROLL ================= */

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 20) {
    navbar.style.boxShadow = "0 8px 30px rgba(0,0,0,0.08)";
  } else {
    navbar.style.boxShadow = "none";
  }
});
