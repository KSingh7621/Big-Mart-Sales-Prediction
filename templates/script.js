document.addEventListener('DOMContentLoaded', function () {
  // Form validation - you can add additional custom validation if needed
  const form = document.querySelector('form')

  form.addEventListener('submit', function (e) {
    let isValid = true

    // Check if all required fields are filled
    const requiredFields = form.querySelectorAll('[required]')
    requiredFields.forEach(function (field) {
      if (field.value.trim() === '') {
        isValid = false
        field.style.borderColor = '#ff6b81' // Set red border for empty fields
      } else {
        field.style.borderColor = '#a2b9bc' // Reset border color for valid fields
      }
    })

    if (!isValid) {
      e.preventDefault() // Prevent form submission if validation fails
      alert('Please fill in all the required fields.')
    }
  })

  // Example of adding a smooth scroll effect to form sections (if applicable)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      })
    })
  })
})
