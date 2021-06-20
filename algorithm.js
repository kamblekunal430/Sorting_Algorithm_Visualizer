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
