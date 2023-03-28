const desc = () => {
  if(descDiv.style.display === "none") {
    descDiv.style.display = "block"
    btn.innerText = "상세 설명 닫기"
  } else {
    descDiv.style.display = "none"
    btn.innerText = "상세 설명 보기"
  }
}

const dbclick = () => {
  window.open("http://127.0.0.1:5500/a4_time/flower/css/005001000000137525.jpg", "_blank");
}

const mouseover = () => {
  res.style.width = "600px";
  res.style.height = "340px"
}

const mouseout = () => {
  res.style.width = "500px";
  res.style.height = "280px"
}

btn.addEventListener('click', desc);

res.addEventListener('dblclick', dbclick);

res.addEventListener('mouseover', mouseover);

res.addEventListener('mouseout', mouseout);