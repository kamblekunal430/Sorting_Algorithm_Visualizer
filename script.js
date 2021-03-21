var randomArray = randomArrayGenerator();

const btn = document.querySelectorAll("button");

newArray();

function randomArrayGenerator() {
  var randomArray = [];
  for (let i = 0; i < 30; i++) {
    randomArray.push(Math.floor(Math.random() * 300 + 20));
  }
  return randomArray;
}

function newArray() {
  randomArray = randomArrayGenerator();
  console.log(randomArray);
  document.getElementById("bars").innerHTML = "";
  createBars(randomArray);
}

function createBars(randomArray) {
  for (let i = 0; i < 30; i++) {
    var arr_bar = document.createElement("div");
    arr_bar.id = "div" + i.toString();
    arr_bar.className = "barStyle";
    arr_bar.style.height = `${randomArray[i]}px`;
    document.getElementById("bars").appendChild(arr_bar);
  }
}

function changeHeight(ele1, ele2) {
  const style1 = window.getComputedStyle(ele1);
  const style2 = window.getComputedStyle(ele2);

  const transform1 = style1.getPropertyValue("height");
  const transform2 = style2.getPropertyValue("height");

  ele1.style.height = transform2;
  ele2.style.height = transform1;
}

function changeColor(ele, colorname) {
  ele.style.backgroundColor = colorname;
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function enableDisableBTN(status) {
  var i = 0;
  btn.forEach(() => {
    btn[i].disabled = status;
    i++;
  });
}

async function bubbleSort() {
  enableDisableBTN(true);
  await delay(250);
  for (i = 0; i < 30; i++) {
    for (j = 0; j < 30 - i - 1; j++) {
      var ele1 = document.getElementById(`div${j}`);
      var ele2 = document.getElementById(`div${j + 1}`);
      changeColor(ele1, "red");
      changeColor(ele2, "red");
      await delay(150);

      if (randomArray[j] >= randomArray[j + 1]) {
        changeHeight(ele1, ele2);
        await delay(250);
        let temp = randomArray[j];
        randomArray[j] = randomArray[j + 1];
        randomArray[j + 1] = temp;
      }

      changeColor(ele1, "lightseagreen");
      changeColor(ele2, "lightseagreen");
      await delay(250);
    }

    changeColor(ele2, "green");
  }
  changeColor(ele2, "green");
  changeColor(ele1, "green");
  console.log(randomArray);

  enableDisableBTN(false);
}

async function selectionSort() {
  enableDisableBTN(true);
  await delay(250);
  for (i = 0; i < 30 - 1; i++) {
    var ele1 = document.getElementById(`div${i}`);
    changeColor(ele1, "red");
    for (j = i + 1; j < 30; j++) {
      var ele2 = document.getElementById(`div${j}`);

      changeColor(ele2, "red");
      await delay(150);

      if (randomArray[i] >= randomArray[j]) {
        changeHeight(ele1, ele2);
        await delay(250);
        let temp = randomArray[i];
        randomArray[i] = randomArray[j];
        randomArray[j] = temp;
      }

      changeColor(ele2, "lightseagreen");
      await delay(250);
    }

    changeColor(ele1, "green");
  }
  changeColor(ele2, "green");
  changeColor(ele1, "green");
  console.log(randomArray);

  enableDisableBTN(false);
}
