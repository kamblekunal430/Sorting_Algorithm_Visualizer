var flag = 0;

function createArray() {
  var randomArray = [];
  for (let i = 0; i < 50; i++) {
    randomArray.push(Math.floor(Math.random() * 250 + 20));
  }
  console.log(randomArray);
  document.getElementById("bars").innerHTML = "";
  createBars(randomArray);
}
function createBars(randomArray) {
  for (let i = 0; i < 50; i++) {
    var arr_bar = document.createElement("div");
    arr_bar.id = "div" + i.toString();
    arr_bar.className = "barStyle";
    arr_bar.style.height = `${randomArray[i]}px`;
    document.getElementById("bars").appendChild(arr_bar);
  }
}
