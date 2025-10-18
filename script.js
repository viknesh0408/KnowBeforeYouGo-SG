    // JS Section for Section-Based Translation
    function showSection(sectionId, lang){
      const enDiv = document.getElementById(sectionId+'-en');
      const taDiv = document.getElementById(sectionId+'-ta');
      if(lang==='en'){
        enDiv.style.display='block';
        taDiv.style.display='none';
      } else {
        enDiv.style.display='none';
        taDiv.style.display='block';
      }
    }


// Contact Form Submission
document
    .getElementById("contactForm")
    .addEventListener("submit", async function (e) {
        e.preventDefault();
        const form = e.target;
        const status = document.getElementById("formStatus");

        const data = {
            name: form.name.value,
            email: form.email.value,
            mobile: form.mobile.value,
            message: form.message.value,
        };

        status.innerHTML = "⏳ Sending message...";

        try {
          const response = await fetch("https://formspree.io/f/manpvrpo", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });

          if (response.ok) {
            status.innerHTML =
              "✅ Message sent successfully! We’ll get back to you soon.";
            form.reset();
          } else {
            status.innerHTML = "❌ Failed to send. Please try again later.";
          }
        } catch (error) {
          status.innerHTML = "⚠️ Network error. Please check your connection.";
        }
      });