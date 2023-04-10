const result = document.getElementById('result')
const input = document.getElementById('input')
const sendBtn = document.getElementById('sendBtn')
const usrcnt = document.getElementById('usrcnt')

class FollowUp {
  userCount=0;
  userTurn=1;
  lastWord="";
  wave=0;

  setUserTurn() {
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
    console.log(word.length > 1)
    if (word.length > 1 || word.length == 1) {
      if (!this.lastWord) {
        this.lastWord = word;
        this.setUserTurn();
        this.wave += 1;
      } else {
        if (this.lastWord[this.lastWord.length-1] === word[0]) {
          this.lastWord = word;
          this.setUserTurn();
          this.wave += 1;
        } else {
          alert("글자 끝 부분을 봐, 될것 같냐?")
        }
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
      followUp.setUserCount(prompt('참가자 수를 적어주쇼'))
    }
    result.innerText = followUp.getLastWord()
    usrcnt.innerText = followUp.getUserTurn()
  }, 500)
})

// prompt로 시작하고, 