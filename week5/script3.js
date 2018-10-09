function addStudent(){
  const a=true;
  var qwe=document.querySelector("#name").value;
  if(!qwe){
    document.querySelector("#name").classList.add("error");
    a=false;
  }
  else{
    document.querySelector("#name").classList.remove("error");
  }
  var qwe1=document.querySelector("#surname").value;
  if(!qwe1){
    document.querySelector("#surname").classList.add("error");
    a=false;
  }
  else{
    document.querySelector("#surname").classList.remove("error");
  }
  if(a){
    addRow();
  }
}


function addRow() {
  var aty = document.querySelector('#name').value;
  var zhoni = document.querySelector('#surname').value;
  var faculty = document.querySelector('#faculty').value;
                  
  var table = document.querySelector('#students');
                  
  var newRow = table.insertRow(table.rows.length);
                  
  var asd1 = newRow.insertCell(0);
  var asd2 = newRow.insertCell(1);
  var asd3 = newRow.insertCell(2);

  asd1.innerHTML = aty;
  asd2.innerHTML = zhoni;
  asd3.innerHTML = faculty;

}

document.querySelector("#addStudent").addEventListener('click',addStudent);