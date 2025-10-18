/* Contact Form Submission */
document.getElementById("contactForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  const form = e.target;
  const status = document.getElementById("formStatus");
  
  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };
  
  status.innerHTML = "⏳ Sending message...";

  try {
    const response = await fetch("https://formspree.io/f/manpvrpo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      status.innerHTML = "✅ Message sent successfully! We’ll get back to you soon.";
      form.reset();
    } else {
      status.innerHTML = "❌ Failed to send. Please try again later.";
    }
  } catch (error) {
    status.innerHTML = "⚠️ Network error. Please check your connection.";
  }
});