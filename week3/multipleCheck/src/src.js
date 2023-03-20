function multipleCheck() {
  const data = prompt("숫자를 입력해주세요.")
  const result = document.getElementById('result')
  
  if (!data) 
    return result.innerText = "입력이 취소됐습니다."
  
  if(data % 3 == 0) {
    return result.innerText = "3의 배수입니다."
  } else {
    return result.innerText = "3의 배수가 아닙니다."
  }
}

window.addEventListener('DOMContentLoaded', () => {
  multipleCheck()
})