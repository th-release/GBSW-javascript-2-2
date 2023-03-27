function subject() {
  const data = prompt("title", "1 - HTML, 2 - CSS, 3 - JAVASCRIPT")
  const result = document.getElementById('result')
  
  if (!data) return result.innerText = "와! 안쓰다니! 넌 쓸모 없어!"

  switch(data) {
    case '1':
      result.innerText = "HTML을 선택"
      break;
    case '2':
      result.innerText = "CSS를 선택"
      break;
    case '3':
      result.innerText = "JAVASCRIPT를 선택"  
      break;
    default:
      result.innerText = "좀 선택하라는것만 선택해라 좀;"
      break;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  subject();
})