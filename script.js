let expression = "";
const inputBox = document.querySelector("#userInput");
const numPad = document.querySelector(".numberKeys");

function press(val) {
    expression += val;
    inputBox.value = expression;
}

function calculate() {
    inputBox.value = eval(expression);
    expression = "";
}

function erase() {
    expression = "";
    inputBox.value = "0";
}

let numKeys = [];
for (let i = 0; i < 10; i++) {
    numKeys[i]=document.createElement("button");
    numKeys[i].className = "n-key";
    numKeys[i].textContent = `${i}`;
    // numKeys[i].addEventListener("click", function (e) {
    //     press(e.target.textContent);
    // });
    // numPad.appendChild(numKeys[i]);
}
numPad.addEventListener("click", function (e) {
    press(e.target.textContent);
})
numPad.append(...numKeys);