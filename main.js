function showSection(id) {
  document.querySelectorAll('.section').forEach(s => {
    s.classList.remove('active')
  })

  const newSection = document.getElementById(id)
  newSection.classList.add('active')

  newSection.style.animation = 'none'
  newSection.offsetHeight
  newSection.style.animation = ''
}

function changeImage(src) {
  const mainImg = document.getElementById('mainDisplay')
  mainImg.classList.remove('fade-in')
  void mainImg.offsetWidth
  mainImg.src = src
  mainImg.classList.add('fade-in')
}

function scrollThumbnails(direction) {
  const scrollBox = document.getElementById('thumbnailsScroll')
  const scrollAmount = 220
  scrollBox.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' })
}
