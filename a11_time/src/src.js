let onBtn = document.querySelector('#on')

function on() {
  const p = document.createElement('p')
  const text = document.createTextNode('설명: 제대로')
  p.appendChild(text)
  p.setAttribute('id', 'desc')
  
  const onBtn = document.querySelector('button')
  document.body.removeChild(onBtn)
  
  const offBtn = document.createElement('button')
  const btnText = document.createTextNode('설명 닫기')
  offBtn.setAttribute('id', 'off')
  offBtn.appendChild(btnText)
  
  document.body.appendChild(p)
  document.body.appendChild(offBtn)

  offBtn.addEventListener('click', () => off())
}

function off() {
  const desc = document.querySelector('p')
  const off = document.querySelector('button')

  const onBtn = document.createElement('button')
  const btnText = document.createTextNode('설명 보기')
  onBtn.setAttribute('id', 'on')
  onBtn.appendChild(btnText)
  
  document.body.removeChild(desc)
  document.body.removeChild(off)
  
  onBtn.addEventListener('click', () => on())
  document.body.appendChild(onBtn)
}

onBtn.addEventListener('click', () => on())