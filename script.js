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

// function to perform bubble sort on array
async function bubbleSort() {
  enableDisableBTN(true);
  await delay(250);
  for (i = 0; i < 30; i++) {
    for (j = 0; j < 30 - i - 1; j++) {
      var ele1 = document.getElementById(`div${j}`);
      var ele2 = document.getElementById(`div${j + 1}`);
      //console.log(ele1, ele2);
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

// function to perform selection sort on array
async function selectionSort() {
  enableDisableBTN(true);
  await delay(250);
  for (i = 0; i < 30 - 1; i++) {
    var ele1 = document.getElementById(`div${i}`);
    changeColor(ele1, "yellow");
    for (j = i + 1; j < 30; j++) {
      var ele2 = document.getElementById(`div${j}`);

      changeColor(ele2, "red");
      await delay(150);

      if (randomArray[i] >= randomArray[j]) {
        changeHeight(ele1, ele2);
        await delay(250);
        swap(i, j);
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

async function insertionSort() {
  enableDisableBTN(true);
  await delay(150);
  var key;
  for (i = 1; i < 30; i++) {
    key = randomArray[i];
    j = i - 1;

    var ele1 = document.getElementById(`div${i}`);
    var ele2 = document.getElementById(`div${j}`);
    var ele3 = document.getElementById(`div${j + 1}`);

    while (j >= 0 && randomArray[j] > key) {
      ele2 = document.getElementById(`div${j}`);
      ele3 = document.getElementById(`div${j + 1}`);
      changeColor(ele2, "rgba(0,255,0,0.7)");
      changeColor(ele3, "yellow");
      await delay(500);

      changeHeight(ele2, ele3);
      changeColor(ele2, "green");
      changeColor(ele3, "green");
      await delay(150);
      randomArray[j + 1] = randomArray[j];
      j -= 1;
    }

    ele3 = document.getElementById(`div${j + 1}`);

    await delay(150);
    randomArray[j + 1] = key;
    //  changeColor(ele1, "yellow");

    changeColor(ele2, "green");

    changeColor(ele3, "green");
  }

  enableDisableBTN(false);
}

function qSort(left, right) {
  var index;
  if (randomArray.length > 1) {
    index = partition(left, right); //index returned from partition
    if (left < index - 1) {
      //more elements on the left side of the pivot
      qSort(left, index - 1);
    }
    if (index < right) {
      //more elements on the right side of the pivot
      qSort(index, right);
    }
  }
  return randomArray;
}

function partition(left, right) {
  let mid = Math.floor((right + left) / 2);
  var pivot = randomArray[mid]; //middle element
  console.log("pivot", pivot, left, right);
  var ele1 = document.getElementById(`div${pivot}`);
  console.log(ele1);
  //left pointer
  i = left;
  //right pointer
  j = right;

  while (i <= j) {
    while (randomArray[i] < pivot) {
      i++;
    }
    while (randomArray[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(i, j); //swap two elements
      i++;
      j--;
    }
  }
  return i;
}

function quickSort() {
  alert("Quick sort is yet to implement please try other algorithm");

  console.log(randomArray);

  qSort(0, randomArray.length - 1);

  console.log(randomArray);
}

function mergeSort() {
  alert("Merge sort is yet to implement please try other algorithm");
}
