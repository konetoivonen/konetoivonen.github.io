// Custom JavaScript for the responsive Bootstrap site

// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Offset for fixed navbar
          behavior: "smooth",
        })
      }
    })
  })

  // Form submission handling
  const contactForm = document.querySelector("#contact form")
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()

      // In a real application, you would send the form data to a server
      // For this demo, we'll just show an alert
      alert("Thank you for your message! In a real application, this would be sent to a server.")

      // Reset the form
      this.reset()
    })
  }
})
