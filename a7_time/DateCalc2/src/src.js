const page1 = document.getElementById('page1')
const page2 = document.getElementById('page2')
const myBirthDay = document.getElementById('myBirthDay')
const resultBirth = document.getElementById('resultBirth')

class DayCalc {
  toNow = new Date().getTime();
  birth = ""
  alive_day = 0
  arr = [8640000000, 8640000000*2, 8640000000*3, 8640000000*5]
  dayArray = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'] 
  
  addEventListener() {
    myBirthDay.addEventListener('change', (e) => {
      this.birth = new Date(e.target.value).getTime()
      this.alive_day = Math.round((this.toNow - this.birth) / (1000*60*60*24))
      for (let i = 1; i <= 4; i++) {
        const on = document.getElementById(`d${i}00`)
        const dat = new Date(this.birth + this.arr[i-1])
        on.innerText = dat.getFullYear() + "년 " + dat.getMonth() + "월 " + dat.getDate() + "일 " + this.dayArray[dat.getDay()]
      }
      resultBirth.innerText = this.alive_day
    })
  }
}

document.addEventListener('mousemove', (e) => {
  const width = (e.clientX / window.innerWidth) * 100
  if (width <= 10) {
    page1.className = "page1On"
    page2.className = "page2Off"
  } else if (width >= 90) {
    page1.className = "page1Off"
    page2.className = "page2On"
  }
})

const dayCalc = new DayCalc();
dayCalc.addEventListener();
