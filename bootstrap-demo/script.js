// Set current year in footer
document.getElementById("current-year").textContent = new Date().getFullYear()

// Add active class to nav items when clicked
document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
  link.addEventListener("click", function () {
    document.querySelectorAll(".navbar-nav .nav-link").forEach((item) => {
      item.classList.remove("active")
      item.removeAttribute("aria-current")
    })
    this.classList.add("active")
    this.setAttribute("aria-current", "page")
  })
})

// Close the mobile menu when a link is clicked
document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const navbarToggler = document.querySelector(".navbar-toggler")
    const navbarCollapse = document.querySelector(".navbar-collapse")
    if (navbarCollapse.classList.contains("show")) {
      navbarToggler.click()
    }
  })
})

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const targetId = this.getAttribute("href")
    if (targetId === "#") return

    const targetElement = document.querySelector(targetId)
    if (targetElement) {
      const navbarHeight = document.querySelector(".navbar").offsetHeight
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  })
})
