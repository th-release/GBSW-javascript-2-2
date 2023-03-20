function evenCheck() {
  const result = document.getElementById('result')
  const data1 = prompt("숫자1를 입력해주세요.")
  if (!data1) 
    return result.innerText = "사용자가 입력을 취소했습니다"
  const data2 = prompt("숫자2를 입력해주세요.")
  if (!data2) 
    return result.innerText = "사용자가 입력을 취소했습니다"

  if (isNaN(parseInt(data1)) || isNaN(parseInt(data2))) return alert("숫자만 입력해주세요.")
  else {
    if (parseInt(data1) % 2 == 0 && parseInt(data2) % 2 == 0) {
      alert("성공")
    } else {
      alert("실패")
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  evenCheck()
})