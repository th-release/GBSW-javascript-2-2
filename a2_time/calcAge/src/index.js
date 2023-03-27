function calc() {
  const date = new Date();
  const age = prompt();
  document.getElementById('result').innerHTML=`<div id="result" class show>당신의 나이는 ${date.getFullYear() - parseInt(age) + 1}살 입니다.</div>`
}