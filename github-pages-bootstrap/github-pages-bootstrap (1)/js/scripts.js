// Custom JavaScript for the responsive Bootstrap site

// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize tooltips
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl))

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        // Get the height of the navbar
        const navbarHeight = document.querySelector(".navbar").offsetHeight

        window.scrollTo({
          top: targetElement.offsetTop - navbarHeight, // Offset for fixed navbar
          behavior: "smooth",
        })

        // Update active nav link
        document.querySelectorAll(".navbar .nav-link").forEach((link) => {
          link.classList.remove("active")
        })
        this.classList.add("active")
      }
    })
  })

  // Update active nav link on scroll
  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY + 100 // Add offset
    const navbarHeight = document.querySelector(".navbar").offsetHeight

    // Get all sections
    const sections = document.querySelectorAll("section, header")

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - navbarHeight
      const sectionHeight = section.offsetHeight
      const sectionId = section.getAttribute("id")

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        document.querySelectorAll(".navbar .nav-link").forEach((link) => {
          link.classList.remove("active")
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active")
          }
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

  // Initialize carousel with custom options
  const mainCarousel = document.getElementById("mainCarousel")
  if (mainCarousel) {
    const carousel = new bootstrap.Carousel(mainCarousel, {
      interval: 5000,
      wrap: true,
      touch: true,
    })
  }
})
