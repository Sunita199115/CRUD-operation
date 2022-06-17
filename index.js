var arr = [];
window.arr = arr;
var submitBtn = document.querySelector("#submit-btn");
var outputEl = document.querySelector("#output");
var searchBtn = document.querySelector("#btn-search");
var saveBtn = document.querySelector("#btn-save");
var deleteBtn = document.querySelector("#btn-delete");

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
    // console.log(outputEl.innerHTML);
  }
}
//This function will give updated values
// function findObj(obj) {
//   if (obj.name == "Sunita") {
//     return obj;
//   }
//   //let value = document.querySelector("#name");
// }

function update() {
  let user;
  var searchValue = document.getElementById("input-name").value;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name.indexOf(searchValue) > -1) {
      user = arr[i];
      break;
    }
  }
  console.log(user);
  // outputEl.innerHTML = user;
  if (user) {
    document.querySelector("#edit-name").value = user.name;
    document.querySelector("#edit-age").value = user.age;
    document.querySelector("#edit-mobile").value = user.mobile;
  }
}
searchBtn.addEventListener("click", update);
function updateData() {
  var inp_Name = document.querySelector("#edit-name").value;
  for (var i = 0; i < arr.length; i++) {
    if (inp_Name == arr[i].name) {
      var index = i;
      break;
    }
  }
  arr[index].age = document.querySelector("#edit-age").value;
  arr[index].mobile = document.querySelector("#edit-mobile").value;
  readData();
}
saveBtn.addEventListener("click", updateData);
function deleteData() {
  var inp_Name = document.querySelector("#edit-name").value;
  for (var i = 0; i < arr.length; i++) {
    if (inp_Name == arr[i].name) {
      var index = i;
      break;
    }
  }
  arr.splice(i, 1);
  readData();
}
deleteBtn.addEventListener("click", deleteData);
