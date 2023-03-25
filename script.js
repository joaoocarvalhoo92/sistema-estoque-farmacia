let btn = document.getElementById('btn');
let medicamentos = [];

function addMedicamento() {
  event.preventDefault();
  let med = {
    "inputMedicamento": document.getElementById('inputMedicamento').value,
    "inputqtde": document.getElementById('inputqtde').value,
    "inputclasse": document.getElementById('inputclasse').value,
  };
  document.getElementById('inputMedicamento').value = "";
  document.getElementById('inputqtde').value = "";
  document.getElementById('inputclasse').value = "";
  medicamentos.push(med);
  Rendertable();
}

function Rendertable() {
  let table = document.getElementById('dataTable');
  let rows = medicamentos.map((med, i) => `
    <tr>
      <td>${i + 1}</td>
      <td>${med.inputMedicamento}</td>
      <td>${med.inputqtde}</td>
      <td>${med.inputclasse}</td>
      <td><button onclick="removeMedicamento(${i})">REMOVER</button></td>
    </tr>`).join('');
  table.innerHTML = `
    <thead>
      <th>ID</th>
      <th>MEDICAMENTO</th>
      <th>QUANTIDADE</th>
      <th>CLASSE DE MEDICAMENTO</th>
      <th>REMOVER</th>
    </thead>
    <tbody>
      ${rows}
    </tbody>`;
}

function removeMedicamento(index) {
  medicamentos.splice(index, 1);
  Rendertable();
}

btn.addEventListener('click', addMedicamento);
