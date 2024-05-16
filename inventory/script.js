const drugName = [
  "Clopidogrel",
  "Varenicline",
  "Mirtazapine",
  "Pregabalin",
  "Baclofen",
  "Ondansetron",
  "Esomeprazole",
  "Furosemide",
  "Warfarin",
  "Atorvastatin",
  "Lorazepam",
  "Celecoxib",
  "Losartan",
  "Fluoxetine",
  "Clozapine",
  "Paracetamol",
  "Metoprolol",
  "Risperidone",
  "Ranitidine",
  "Lisinopril",
  "Bupropion",
  "Methotrexate",
  "Montelukast",
  "Memantine",
  "Azithromycin",
  "Phenobarbital",
  "Tiotropium",
  "Levothyroxine",
  "Salbutamol",
  "Methylphenidate",
  "Amoxicillin",
  "Citalopram",
  "Tadalafil",
  "Hydrochlorothiazide",
  "Metformin",
  "Ibuprofen",
];

const drugType = [
  "Antihypertensive2",
  "Antibiotic",
  "Antidiabetic",
  "Antihypertensive",
  "Bronchodilator",
  "Anticonvulsant",
  "Diuretic",
  "Antilipemic",
  "Antihistamine",
  "Anticoagulant",
  "Antidiabetic",
  "Bronchodilator",
  "Antihypertensive",
  "Antiplatelet",
  "Antidepressant",
  "Antihistamine",
  "ProtonPumpInhibitor",
  "Fluoroquinolone",
  "Antidepressant",
  "Antihypertensive",
  "Corticosteroid",
  "LeukotrieneReceptorAntagonist",
  "SelectiveSerotoninReuptakeInhibitor",
  "Analgesic",
  "Benzodiazepine",
  "Antihistamine",
  "H2Blocker",
  "Benzodiazepine",
  "Antihypertensive",
  "SelectiveSerotoninReuptakeInhibitor",
  "AlphaBlocker",
  "Antidepressant",
  "Antidepressant",
  "Antihypertensive",
  "Benzodiazepine",
  "OpioidAnalgesic",
];

function initializeTable() {
  const tableBody = document
    .getElementById("drugTable")
    .getElementsByTagName("tbody")[0];
  tableBody.innerHTML = "";

  drugName.forEach((item, index) => {
    const newRow = tableBody.insertRow();

    const nameCell = newRow.insertCell(0);
    nameCell.textContent = item;
    nameCell.classList.add("cell");

    const typeCell = newRow.insertCell(1);
    typeCell.textContent = drugType[index];
    typeCell.classList.add("cell");

    const inventoryCell = newRow.insertCell(2);
    inventoryCell.innerHTML = `<input class="inp" type="number" max="100" style="width: 60px;" />`;
    inventoryCell.classList.add("cell");

    for (let i = 0; i < 12; i++) {
      const monthCell = newRow.insertCell(3 + i);
      monthCell.classList.add("cell");
      monthCell.textContent = "";
    }
  });
}

function populateForecastData() {
  const tableBody = document
    .getElementById("drugTable")
    .getElementsByTagName("tbody")[0];

  for (let i = 0; i < tableBody.rows.length; i++) {
    const row = tableBody.rows[i];

    const inputElement = row.cells[2].querySelector(".inp");
    if (!inputElement.value.trim()) {
      continue;
    }

    for (let j = 3; j < 15; j++) {
      const monthCell = row.cells[j];
      monthCell.textContent = Math.round(Math.random() * 20 - 10);
    }
  }
}

document.addEventListener("DOMContentLoaded", initializeTable);
document.querySelector(".btn").addEventListener("click", populateForecastData);
