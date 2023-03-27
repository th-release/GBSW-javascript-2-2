function evenOddCheck() {
  const data = prompt()
  if (!data) {
    alert("입력이 취소 됬습니다.");
  } else if (data == 0) {
    alert("0을 입력하셨습니다.");
  } else if (parseInt(data) % 2 == 0) {
    alert("짝수 입니다.");
  } else {
    alert("홀수 입니다.")
  }
}

window.addEventListener('DOMContentLoaded', () => {
  evenOddCheck();
})