var randomArray = randomArrayGenerator();

const btn = document.querySelectorAll("button");

// generate array and bars when page is refreshed
newArray();

//fuction to generate random array
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

//fuction to generate bars of random array
function createBars(randomArray) {
  for (let i = 0; i < 30; i++) {
    var arr_bar = document.createElement("div");
    arr_bar.id = "div" + i.toString();
    arr_bar.className = "barStyle";
    arr_bar.style.height = `${randomArray[i]}px`;
    document.getElementById("bars").appendChild(arr_bar);
  }
}

// function to change the height of bars
function changeHeight(ele1, ele2) {
  const style1 = window.getComputedStyle(ele1);
  const style2 = window.getComputedStyle(ele2);

  const transform1 = style1.getPropertyValue("height");
  const transform2 = style2.getPropertyValue("height");

  ele1.style.height = transform2;
  ele2.style.height = transform1;
}

//function to change the color of bars
function changeColor(ele, colorname) {
  ele.style.backgroundColor = colorname;
}

// function to add delay to view animation
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// function to enable and disable buttons
function enableDisableBTN(status) {
  var i = 0;
  btn.forEach(() => {
    btn[i].disabled = status;
    i++;
  });
}

function swap(i, j) {
  var temp = randomArray[i];
  randomArray[i] = randomArray[j];
  randomArray[j] = temp;
}
