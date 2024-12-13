const minusButton = document.querySelector("#minus");
const plusButton = document.querySelector("#plus");
const countButton = document.querySelector("#count");
const startStopButton = document.querySelector("#start-stop");
const resetButton = document.querySelector("#reset");

plusButton.addEventListener("click", () => {
  countButton.textContent =
    parseInt(
      countButton.textContent
        .split("")
        .filter((n) => n !== "s")
        .join("")
    ) +
    1 +
    "s";
});

minusButton.addEventListener("click", () => {
  countButton.textContent =
    parseInt(
      countButton.textContent
        .split("")
        .filter((n) => n !== "s")
        .join("")
    ) -
    1 +
    "s";
});

resetButton.addEventListener("click", () => {
  countButton.textContent = 0 + "s";
});

const decrement = function () {
  let num = parseInt(
    countButton.textContent
      .split("")
      .filter((n) => n !== "s")
      .join("")
  );
  countButton.textContent = num - 1 + "s";
  num = parseInt(
    countButton.textContent
      .split("")
      .filter((n) => n !== "s")
      .join("")
  );
};
startStopButton.addEventListener("click", (event) => {
  if (startStopButton.textContent === "START") {
    startStopButton.textContent = "STOP";
    var hum = setInterval(decrement, 1000);
    localStorage.setItem("timeID", hum);
    setTimeout(
      () => {
        clearInterval(hum);
      },
      parseInt(
        countButton.textContent
          .split("")
          .filter((n) => n !== "s")
          .join("")
      ) * 1000
    );
  } else if (startStopButton.textContent === "STOP") {
    clearInterval(localStorage.getItem("timeID"));
    startStopButton.textContent = "START";
  }
});
