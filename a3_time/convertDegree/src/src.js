function convertDegree() {
  const Fahrenheit = prompt("화씨를 입력해주세요.");
  const Degree = (Fahrenheit - 32) * 5/9;
  const resultElement = document.getElementById("result")
  if (!Fahrenheit) {
    resultElement.innerText = "취소 하셨습니다."
  } else {
    resultElement.innerText = Degree.toFixed(1) + " °C";
  }
}

window.addEventListener('DOMContentLoaded', () => {
  convertDegree();
})
