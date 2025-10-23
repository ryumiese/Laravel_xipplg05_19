// === SMOOTH SCROLL ===
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});


// === HORIZONTAL GALLERY SCROLL ===
const gallery = document.querySelector('.gallery-scroll');
if (gallery) {
  let isDown = false;
  let startX;
  let scrollLeft;

  gallery.addEventListener('mousedown', (e) => {
    isDown = true;
    gallery.classList.add('active');
    startX = e.pageX - gallery.offsetLeft;
    scrollLeft = gallery.scrollLeft;
  });

  gallery.addEventListener('mouseleave', () => {
    isDown = false;
    gallery.classList.remove('active');
  });

  gallery.addEventListener('mouseup', () => {
    isDown = false;
    gallery.classList.remove('active');
  });

  gallery.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - gallery.offsetLeft;
    const walk = (x - startX) * 2; // scroll speed
    gallery.scrollLeft = scrollLeft - walk;
  });
}


// === SEND ORDER TO WHATSAPP ===
function sendToWhatsApp(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const menu = document.getElementById("menu").value;
  const quantity = document.getElementById("quantity").value;
  const note = document.getElementById("note").value;

  const phone = "6281326798544"; // Ganti dengan nomor WA kamu tanpa +
  const message = `Hello! I'd like to order:\n\n👤 Name: ${name}\n🍰 Menu: ${menu}\n🔢 Quantity: ${quantity}\n📝 Notes: ${note || '-'}\n\nThank you!`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}


// === PRODUCT PREVIEW MODAL ===
const modal = document.getElementById('product-modal');
const modalImage = document.getE
