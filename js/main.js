let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.add("visible");
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.remove("visible");
}

document.addEventListener('DOMContentLoaded', () => {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const icon = document.getElementById('bulb');
  const darkMode = localStorage.getItem('darkMode');

  if (darkMode === 'enabled') {
      document.body.classList.add('dark-mode');
      icon.classList.remove('bxs-bulb');
      icon.classList.add('bx-bulb');
      icon.style.color = 'rgb(235, 235, 235)';
      darkModeToggle.checked = true;
  } else {
      document.body.classList.remove('dark-mode');
      icon.classList.remove('bx-bulb');
      icon.classList.add('bxs-bulb');
      icon.style.color = "rgb(0, 47, 68)";
      darkModeToggle.checked = false;
  }

  darkModeToggle.addEventListener('change', () => {
      if (darkModeToggle.checked) {
          document.body.classList.add('dark-mode');
          icon.classList.remove('bxs-bulb');
          icon.classList.add('bx-bulb');
          icon.style.color = "rgb(235, 235, 235)";
          localStorage.setItem('darkMode', 'enabled');
      } else {
          document.body.classList.remove('dark-mode');
          icon.classList.remove('bx-bulb');
          icon.classList.add('bxs-bulb');
          icon.style.color = 'rgb(0, 47, 68)';
          localStorage.setItem('darkMode', 'disabled');
      }
  });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
  var email = document.getElementById('email').value;
  var emailVerify = document.getElementById('emailVerify').value;
  var errorMessage = document.getElementById('error-message');

  if (email !== emailVerify) {
    event.preventDefault();
    errorMessage.textContent = 'Email addresses do not match.';
  } else {
    errorMessage.textContent = '';
  }
});