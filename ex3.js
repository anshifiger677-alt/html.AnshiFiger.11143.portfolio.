function goToSlide(index) {
  const slides = document.querySelectorAll(".slide");
  slides[index].scrollIntoView({ behavior: "smooth" });
}
document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contact-form");
  const successMessage = document.getElementById("success-message");

  if (!form) {
    console.error("Form not found: check id='contact-form'");
    return;
  }

  form.addEventListener("submit", function () {
    successMessage.style.display = "block";
  });

});
document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contact-form");
  const successMessage = document.getElementById("success-message");

  if (!form) {
    console.error("Form not found");
    return;
  }

  form.addEventListener("submit", function () {

    // Show success message
    successMessage.style.display = "block";

    // 🎉 CONFETTI EFFECT
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });
  });

});


