const result = document.getElementById('result')
const input = document.getElementById('itemName')
const submit = document.getElementById('submit')
let button = undefined
const arr = [];

function reRender() {
  let data = ``
  for(let i=0; i<arr.length; i++) {
    data += `<p id="arr_${i}">` +
      `${arr[i]}` +
      `<input type="button" id="arr__${i}" value="X"></input>`+
      `</p>`
  }
  result.innerHTML = data
}

document.getElementById()

submit.addEventListener('click', () => {
  if (input.value) {
    arr.push(input.value);
  }
  
  reRender();
})