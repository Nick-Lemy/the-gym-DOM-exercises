const t0 = performance.now();
const myParagraph = document.getElementById("myParagraph");
const test = myParagraph.innerHTML.split(" ").filter((n) => n !== "");

const words = myParagraph.textContent
  .replace(/[,:;.\n]/g, "")
  .split(" ")
  .filter((n) => n !== "");
const wordsCount = {};
words.forEach((word) => {
  wordsCount[word] = (wordsCount[word] || 0) + 1;
});

const arrayWordsCount = Object.entries(wordsCount).sort((a, b) => b[1] - a[1]);

let hum = [];
arrayWordsCount.forEach((elem) => {
  hum.push(elem[0]);
});
hum = hum.slice(0, 4);
console.log(hum);

for (let i = 0; i < test.length; i++) {
  if (
    hum.includes(test[i].slice(0, test.length - 1)) ||
    hum.includes(test[i].slice(0, test.length - 2))
  ) {
    if (test[i][0].toUpperCase() === test[i][0]) {
      test.splice(
        i,
        1,
        `<mark style='text-decoration: underline'>${test[i]}</mark>`
      );
    } else {
      test.splice(i, 1, `<mark>${test[i]}</mark>`);
    }
  }
}
myParagraph.innerHTML = test.join(" ");
const t1 = performance.now();
console.log(t1 - t0);
