// =====================
// DARK MODE TOGGLE
// =====================
const toggleBtn = document.getElementById("dark-mode-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// =====================
// TYPING ANIMATION
const titleText = "Ashikur Jaman";
const typingTitle = document.getElementById("typing-title");
const cursor = document.getElementById("cursor");
let i = 0;
let isDeleting = false;

function typeLoop() {
  if (!isDeleting) {
    typingTitle.textContent += titleText.charAt(i);
    i++;
    if (i === titleText.length) {
      isDeleting = true;
      setTimeout(typeLoop, 1500); // pause at the end
      return;
    }
  } else {
    typingTitle.textContent = titleText.substring(0, i - 1);
    i--;
    if (i === 0) {
      isDeleting = false;
      setTimeout(typeLoop, 500); // pause before typing again
      return;
    }
  }
  setTimeout(typeLoop, isDeleting ? 100 : 150);
}

// Start typing animation when page loads
document.addEventListener("DOMContentLoaded", typeLoop);

// =====================
// SKILL PROGRESS BAR ANIMATION
// =====================
const skillsSection = document.querySelector("#skills");
const progressBars = document.querySelectorAll(".progress-bar");
const animateSkills = () => {
  progressBars.forEach((bar) => {
    const value = bar.getAttribute("data-progress");
    bar.style.width = value;
  });
};
const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      animateSkills();
      observer.disconnect();
    }
  },
  { threshold: 0.5 }
);
observer.observe(skillsSection);

// =====================
// PROJECT IMAGE MODAL
// =====================
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const caption = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close")[0];

document.querySelectorAll(".project-card img").forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    caption.innerHTML = img.alt;
  });
});

closeBtn.onclick = function () {
  modal.style.display = "none";
};
modal.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};

// =====================
// SCROLL REVEAL
// =====================
const srElements = document.querySelectorAll("section, .project-card, .skill");
function revealOnScroll() {
  const windowBottom = window.innerHeight / 1.2;
  srElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowBottom) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
      el.style.transition = "all 0.6s ease-out";
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
// Initial hide
srElements.forEach((el) => {
  el.style.opacity = 0;
  el.style.transform = "translateY(50px)";
});

// Contact Form Submit (client-side only)
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Simple validation example
  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  if (name && email && message) {
    formStatus.style.color = "green";
    formStatus.textContent = "Message sent successfully!";
    contactForm.reset();
  } else {
    formStatus.style.color = "red";
    formStatus.textContent = "Please fill all fields.";
  }
});
