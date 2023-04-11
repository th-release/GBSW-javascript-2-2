const result = document.getElementById('result')
const input = document.getElementById('input')
const sendBtn = document.getElementById('sendBtn')
const usrcnt = document.getElementById('usrcnt')
const rounds = document.getElementById('rounds')
const cards = document.getElementById('cards')
const resetBtn = document.getElementById('resetBtn')

input.value = "";
input.focus();

class FollowUp {
  userCount=0;
  userTurn=1;
  lastWord="";
  round=1;
  words=[{ round: 0, userNum: 0, word: '' }];
  time=0;
  success=false;

  getRounds() {
    return this.round
  }

  getTime() {
    return this.time;
  }

  setCards() {
    let innerHTML = ``;
    for (const data of this.words) {
      if (data.userNum !== 0) {
        innerHTML += `
          <div class="card">
            <h1 class="user">${data.round}번째 라운드의 ${data.userNum}번째 유저</h1>
            <h1 class="word">${data.word}</h1>
          </div>
        `
      }
    }
    cards.innerHTML = innerHTML
  }

  setUserTurn() {
    this.round += 1;
    if (this.userTurn+1 > this.userCount) {
      this.userTurn = 1;
    } else {
      this.userTurn += 1;
    }
  }

  getUserTurn() {
    return this.userTurn;
  }

  setUserCount(cnt) {
    this.userCount = Number(cnt);
  }

  getUserCount() {
    return this.userCount;
  }

  setLastWord(word) {
    word = word.replace(/([^ㄱ-힣])/g, "");
    if (word.length > 1 || word.length == 1) {
      if (!this.lastWord) {
        this.success = true;
      } else {
        if (this.lastWord[this.lastWord.length-1] === word[0]) {
          if (!this.words.filter(data => data.word === word)[0]) {
            this.success = true
          }
          else {
            alert("어휴 왜 있는걸 하는건데!!!!!!!!!!!!!!!!!")
          }
        } else {
          alert("글자 끝 부분을 봐, 될것 같냐?")
        }
      }
      
      if (this.success && (Date.now() < this.time + 5000 || !this.lastWord)) {
        this.success = false;
        this.time = Date.now();
        this.lastWord = word;
        this.words = [...this.words, { round: this.round, userNum: this.userTurn, word }];
        this.setUserTurn();
        input.value = "";
        input.focus();
      }
    } else {
      alert("상식이 있게 좀 쳐라 어휴")
    }
    return;
  }

  getLastWord() {
    return this.lastWord
  }
}

const followUp = new FollowUp();

input.addEventListener('keydown', () => {
  input.value = input.value.replace(/([^ㄱ-힣])/g, "");
})

resetBtn.addEventListener('click', () => window.location.reload())

sendBtn.addEventListener('click', () => followUp.setLastWord(input.value))

document.addEventListener('keydown', (e) => {
  if(e.key === 'Enter') {
    followUp.setLastWord(input.value)
  }
})  

document.addEventListener('DOMContentLoaded', () => {
  followUp.setUserCount(prompt('참가자 수를 적어주쇼'))
  setInterval(() => {
    if (isNaN(followUp.getUserCount()) || followUp.getUserCount() < 1) {
      followUp.setUserCount(prompt('참가자 수를 적어주쇼'));
    }
    result.innerText = followUp.getLastWord()
    usrcnt.innerText = followUp.getUserTurn() + "번 유저"
    followUp.setCards();
    rounds.innerText = followUp.getRounds() + " 라운드";
    if (followUp.getTime() + 5000 < Date.now() && followUp.getLastWord()) {
      alert("게임 오버!")
      window.location.reload();
    }
  }, 1)
})
