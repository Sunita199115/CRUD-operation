var arr = [];
window.arr = arr;
var submitBtn = document.querySelector("#submit-btn");
var outputEl = document.querySelector("#output");

function createData() {
  var inputName = document.getElementById("name").value;
  var inputAge = document.getElementById("age").value;
  var inputMobile = document.getElementById("mobileNumber").value;

  let person = { name: inputName, age: inputAge, mobile: inputMobile };
  arr.push(person);
  console.log(arr);
  //clear();
  readData();
  //   if(document.querySelector("#Name").value !=""){
  //       var val = document.getElementById("Name").value;
  //       arr.push(val);
  //       console.log("value push to array", arr);
  //       outputEl.innerHTML=''
  //       for(let i=0;i<arr.length; i++){
  //         outputEl.innerHTML = outputEl.innerHTML + " " + arr[i];
  //       }
  //       document.getElementById("Name").value=''
  //   }
  //   else{
  //       console.log("empty value can not be added, please add some value in input box");
  //   }
}

submitBtn.addEventListener("click", createData);

function clear() {
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("mobileNumber").value = "";
}

function readData() {
  var table = document.getElementById("myTable");
  outputEl.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    outputEl.innerHTML =
      outputEl.innerHTML +
      `<div class="outer">
       <div> Name = ${arr[i].name}</div><div> Age =  ${arr[i].age}</div><div> Mobile = ${arr[i].mobile}</div>
       </div>`;
    console.log(outputEl.innerHTML);
  }
}
function update() {}
