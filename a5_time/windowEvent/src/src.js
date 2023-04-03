window.addEventListener('resize', () => {
  console.log(innerHeight, innerWidth)
})

window.addEventListener('load', () => {
  console.log('로딩완료')
})

window.addEventListener('scroll', () => {
  console.log("스크롤 중")
})