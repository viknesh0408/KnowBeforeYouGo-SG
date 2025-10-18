/* Contact Form Submission */
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Simulate form submission
  document.getElementById("formStatus").innerText = "Thank you for your message!";
  this.reset();
});
