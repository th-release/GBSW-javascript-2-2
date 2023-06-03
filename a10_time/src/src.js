const Button = document.getElementById('Button')

const arr = ["https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg", "https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg", "https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg", "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.unsplash.com/photo-1679189792474-6c2796dc78ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80"]

Button.addEventListener('click', () => {
  const Body = document.getElementById('Body')
  const Random = Math.floor(Math.random() * arr.length)
  Body.style.backgroundImage = `url(${arr[Random]})`
})

