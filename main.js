const advice = document.getElementById("quote");
const adviceID = document.getElementById("advice-id");
const submitBtn = document.getElementById("btn-dice");

async function getAdvice() {
  fetch(`https://api.adviceslip.com/advice`)
    .then((response) => {
      return response.json();
    })
    .then((adviceData) => {
      const adviceObj = adviceData.slip;
      adviceID.innerHTML = adviceObj.id;
      advice.innerHTML = adviceObj.advice;
    })
    .catch((error) => {
      console.log(error);
    });
}

submitBtn.addEventListener("click", () => {
  getAdvice();
});

window.onload = () => {
  getAdvice();
};
