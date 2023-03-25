let meds = [];

function addMed(){
    event.preventDefault();

//Collect data from form

let med = {
    "medName": document.getElementById("mName").value,
    "medQ": document.getElementById("mCant").value,
    "medClass": document.getElementById("mClass").value,
}
//

//Clean form

document.getElementById("mName").value,
document.getElementById("mCant").value,
document.getElementById("mClass").value,
//

meds.push(med); //Introduce the med//

renderTable(); //Refresh the board
}

function renderTable(){

    let table = document.getElementById('dataTable');//Find the board//
    //putting the fixed part (title)//
    table.innerHTML = `<tr>
    <th>ID</th>
    <th>Medicamento</th>
    <th>Quantidade</th>
    <th>Classe de Medicamento</th>
    <th>Remover</th>
</tr>`;

//Put all the med in the board//
for (let i = 0; i < meds.length; i++){
    table.innerHTML = table.innerHTML + `<td> ${i} </td>
    <td> ${meds[i].medName}</td>
    <td> ${meds[i].medQ}</td>
    <td> ${meds[i].medClass}</td>
    <td> <img src="images/remove.png" width="25px" height="25px" onclick="removeMed(${i})"></td>
    `
}
}

function removeMed(index){
    meds.splice(index,1);
    renderTable();
}