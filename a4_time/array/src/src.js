const students = ["Kim", "Park", "Lee", "Kang"];

function result() {
  const docResult = document.getElementById("result")
  let str = ""
  str += `<h1> length: ${students.length}<br/><br/>`
  for (let i=0;i<students.length;i++) {
    str += students[i] + "<br/>";
  }
  str += "</h1>"
  docResult.innerHTML = str;
}

window.addEventListener('DOMContentLoaded', () => {
  result();
})