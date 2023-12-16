addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container")
  const result = document.querySelector(".result")

  const resultHolder = document.querySelector(".rating-result span")

  const ratingBtn = document.querySelectorAll(".rating button")

  const submitBtn = document.querySelector(".btn")

  ratingBtn.forEach(btn => {
    btn.addEventListener("click", (e) => {
      resultHolder.textContent = e.target.id
      btn.classList.add("active")

      ratingBtn.forEach(b => {
        if(b.id != e.target.id) {
          b.classList.remove("active")
        }
      })
    })
  })

  submitBtn.addEventListener("click", () => {
    container.classList.add("hidden")
    result.classList.remove("hidden")
  })
})