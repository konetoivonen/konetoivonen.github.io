document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 60,
          behavior: "smooth",
        })

        // Update active nav link
        document.querySelectorAll(".nav-link").forEach((navLink) => {
          navLink.classList.remove("active")
        })
        this.classList.add("active")
      }
    })
  })

  // Update active nav link on scroll
  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY

    document.querySelectorAll("section, header").forEach((section) => {
      const sectionTop = section.offsetTop - 100
      const sectionBottom = sectionTop + section.offsetHeight

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        const currentId = section.getAttribute("id")
        document.querySelectorAll(".nav-link").forEach((navLink) => {
          navLink.classList.remove("active")
          if (navLink.getAttribute("href") === `#${currentId}`) {
            navLink.classList.add("active")
          }
        })
      }
    })
  })

  // Fetch GitHub repositories
  fetchGitHubRepos()
})

// Function to fetch GitHub repositories
function fetchGitHubRepos() {
  // Replace 'username' with a GitHub username or use a demo username
  const username = "octocat"
  const apiUrl = `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok")
      }
      return response.json()
    })
    .then((data) => {
      displayRepos(data)
    })
    .catch((error) => {
      console.error("Error fetching repositories:", error)
      document.getElementById("github-repos").innerHTML = `
        <div class="col-12 text-center">
          <div class="alert alert-danger" role="alert">
            Failed to load GitHub repositories. Please try again later.
          </div>
        </div>
      `
    })
}

// Function to display GitHub repositories
function displayRepos(repos) {
  const reposContainer = document.getElementById("github-repos")

  if (repos.length === 0) {
    reposContainer.innerHTML = `
      <div class="col-12 text-center">
        <div class="alert alert-info" role="alert">
          No repositories found.
        </div>
      </div>
    `
    return
  }

  let reposHTML = ""

  repos.forEach((repo) => {
    // Generate a random color for the language indicator
    const languageColor = getLanguageColor(repo.language)

    reposHTML += `
      <div class="col-md-6 col-lg-4 mb-4">
        <div class="card repo-card border-0 shadow-sm h-100">
          <div class="card-body">
            <h3 class="h5 card-title">
              <a href="${repo.html_url}" target="_blank" class="text-decoration-none">
                ${repo.name}
              </a>
            </h3>
            <p class="card-text text-muted small">
              ${repo.description || "No description available"}
            </p>
            <div class="d-flex justify-content-between align-items-center mt-3">
              <div>
                ${repo.language ? `<span><span class="repo-language" style="background-color: ${languageColor}"></span>${repo.language}</span>` : ""}
              </div>
              <div>
                <span class="me-3"><i class="bi bi-star"></i> ${repo.stargazers_count}</span>
                <span><i class="bi bi-diagram-2"></i> ${repo.forks_count}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  })

  reposContainer.innerHTML = reposHTML
}

// Function to get a color for a programming language
function getLanguageColor(language) {
  const colors = {
    JavaScript: "#f1e05a",
    TypeScript: "#2b7489",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Python: "#3572A5",
    Java: "#b07219",
    "C#": "#178600",
    PHP: "#4F5D95",
    Ruby: "#701516",
  }

  return colors[language] || "#6c757d"
}
