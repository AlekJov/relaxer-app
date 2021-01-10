const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime =7500;
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation(){
  container.className = 'container grow'
  text.innerText = "Breath In!";

  setTimeout(() =>{
    text.innerText = "Hold!"

    setTimeout(() => {
      text.innerText = "Breath Out!"
      container.className = 'container shrink'

    },holdTime)
  },breathTime)
}

setInterval(breathAnimation, totalTime);