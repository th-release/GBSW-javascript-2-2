let arr = [];

function showPrice() {
  const showResult = document.getElementById('showResult')
  const oPrice = document.getElementById('oPrice').value
  const rate = document.getElementById('rate').value
  const rateResult = oPrice * (rate / 100)
  
  for(let i=0;i<3;i++) {
    arr.push(`상품의 원래 가격은 ${oPrice}원이고, 할인율은 ${rate}%입니다. ${rateResult.toFixed(i)}을 절약한 ${(oPrice - rateResult).toFixed(i)}원에 살 수 있습니다.`)
  }

  showResult.innerHTML = arr.join('<br/>')
  arr = []
}