
var status;
let namelist = []
let agelist = []
let nameUserList = [];
let ageUserList = [];
let a = 0;
let i = 0;


function somefun(){
  adalert();
  addRow();
}

function adalert(){
  alert("Data got add in table")
}

function addRow() {
  var name = document.getElementById('name').value;
  var age = document.getElementById('age').value;
  namelist.push(name);
  console.log(namelist);

  agelist.push(age);
  localStorage.setItem("name" + a, name);
  localStorage.setItem("age" + a, age);
  a++;
  localStorage.setItem('max', a);
  if (name != "" && age != "") {
    var table = document.getElementsByTagName('table')[0];
    // table.classList.add('table');

    var newRow = table.insertRow(-1);

    // add cells to the row
    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);
    var cel3 = newRow.insertCell(2);
    var cel4 = newRow.insertCell(3);

    if (name.match(/[aeiouAEIOU]/)) {
      status = "YES";
    }
    else {
      status = "NO";
    }

    cel1.innerHTML = name;
    cel2.innerHTML = age;
    cel3.innerHTML = status;
    cel4.innerHTML = '<input type="button" value = "Check" onClick="checkIt(this)">';
  }
  else {
    alert("PLEASE FILL ALL THE FIELDS")
  }

}
function checkIt() {
  document.querySelector(".bg-modal").style.display = "block";

  const nI = document.getElementById("name");
  const aI = document.getElementById("age");
  const vO = document.getElementById("pop-up");

  nameInput = nI.value;
  ageInput = aI.value;


  var vow = 0;
  var str = nI.value;
  var n = str.length;
  for (i = 0; i < n; i++) {
    if (str[i] == 'A' || str[i] == 'a' || str[i] == 'E' || str[i] == 'e' || str[i] == 'I' || str[i] == 'i' || str[i] == 'O' || str[i] == 'o' || str[i] == 'U' || str[i] == 'u')
      vow++;

  }

  if (ageInput > 18) {
    var msg = "The no of vowels are : " + vow + "------REGISTRATION SUCCESFUL ------";
  }

  else {

    var msg = "The no of vowels are : " + vow + "----REGISTRATION DENIED----  as you are too young";
  }

  vO.innerHTML = msg;


  document.querySelector('.close').addEventListener('click', function () {
    document.querySelector(".bg-modal").style.display = "none";
  });
}
function sendData(){
    

    let nameUser;
    let limit= localStorage.getItem('max');
    for(let i=0 ; i<limit ; i++)
    {
         nameUserList[i] = localStorage.getItem("name"+i);
         ageUserList[i] = localStorage.getItem("age"+i);
         console.log(nameUserList[i]);
         console.log(ageUserList[i]);
    }
    // console.log(nameList.pop());
    // console.log(nameList.pop());
    let table = document.getElementById("table-display");
    let button = document.createElement("BUTTON");        // Create a <button> element
    let text = document.createTextNode("Check");       // Create a text node
    button.appendChild(text);                                
    for(let z=0; i<limit ; z++)
    {
        console.log(z);

        let table = document.getElementById("table-display");
        let button = document.createElement("BUTTON");        // Create a <button> element
        let text = document.createTextNode("Check");       // Create a text node
        button.appendChild(text);                        
        
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
   
    
        let txt1 = document.createTextNode(nameUserList[z]);
        let txt2 = document.createTextNode(ageUserList[z]);
    
    
        button.id="Check"+i; i++;
        // button.onClick="checkVowel()";
        // button.Attributes.add("onclick","checkVowel()");
        button.setAttribute("onclick", "checkVowel2(this.id,nameInput , ageInput)");
        button.setAttribute("class" , "trigger");
        // console.log("Check"+i);
        td1.appendChild(txt1);
        td2.appendChild(txt2);
        td3.appendChild(button);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr);
  }

}



