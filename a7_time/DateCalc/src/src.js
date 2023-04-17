const myBirthDay = document.getElementById('myBirthDay')
const resultBirth = document.getElementById('resultBirth')

const future = document.getElementById('future')
const resultFuture = document.getElementById('resultFuture')

class DayCalc {
  toNow = new Date().getTime();

  onChangeListener() {
    myBirthDay.addEventListener('change', (e) => {
      resultBirth.innerText = Math.round((this.toNow - new Date(e.target.value).getTime()) / (1000*60*60*24))
    })

    future.addEventListener('change', (e) => {
      resultFuture.innerText = Math.round((new Date(e.target.value).getTime() - this.toNow) / (1000*60*60*24))
    })
  }
}

const dayCalc = new DayCalc();

dayCalc.onChangeListener();
