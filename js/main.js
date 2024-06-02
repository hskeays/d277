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
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
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

function validateForm(event) {
  event.preventDefault();
  var email1 = document.getElementById("email").value;
  var email2 = document.getElementById("emailVerify").value;

  if (email1 !== email2) {
    alert("Emails do not match. Please verify.");
    return false;
  }
  this.submit();
}

document.getElementById("contactForm").addEventListener("submit", validateForm);

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  const formData = JSON.parse(event.body);

  // Process form data (send email, save to database, etc.)
  // Example: sending an email
  const { firstName, lastName, email, subject, message } = formData;
  const emailBody = `
    First Name: ${firstName}\n
    Last Name: ${lastName}\n
    Email: ${email}\n
    Subject: ${subject}\n
    Message: ${message}\n
  `;

  // Send email using a service like SendGrid, Nodemailer, etc.
  // Example:
  // sendEmail(emailBody);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Form submitted successfully' })
  };
};