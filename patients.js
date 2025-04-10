import { updatedPatients,addPat } from './sort.js';

const diseaseList = [
    "Acid Reflux", "Addison's Disease", "Alzheimer's Disease", "Anemia", "Asthma",
  "Bladder Cancer", "Bronchitis", "Breast Cancer", "Eczema", "Epilepsy", "Fibromyalgia",
  "Gastritis", "Graves' Disease", "High Blood Pressure", "Hypertension", "Irritable Bowel Syndrome (IBS)",
  "Kidney Disease", "Kidney Stones", "Leukemia", "Liver Cirrhosis", "Lung Cancer", "Lymphoma",
  "Melanoma", "Migraine", "Multiple Sclerosis", "Osteoarthritis", "Parkinson's Disease",
  "Polycystic Ovary Syndrome (PCOS)", "Prostate Cancer", "Psoriasis", "Rheumatoid Arthritis",
  "Sickle Cell Anemia", "Skin Cancer", "Sleep Apnea", "Stroke", "Systemic Lupus Erythematosus (SLE)",
  "Testicular Cancer", "Tuberculosis", "Urinary Incontinence", "Urinary Tract Infection (UTI)"
]

//adds all diseases to patP dropdown (used for adding patients)
export function start1(){
  diseaseList.forEach(function(disease) {
    let x = document.getElementById("patP");
    let option = document.createElement("option");
    option.textContent = disease;
    x.appendChild(option);
  });
  return 1;
}


export function showPatients(clicked) {
  if(!clicked){ //checks if shown or not
    document.getElementById("patButton").innerHTML = "Click to show patients";
    document.getElementById("patOutput").innerHTML = "Patient info will be here";
  }else{
    document.getElementById("patButton").innerHTML = "Click to hide patients";
    const patientContainer = document.getElementById("patOutput");
    let output = "";
  	patientContainer.innerHTML = '';
    updatedPatients.forEach(function(patient) { //adds patients one by one displaying necessary information
        output += `<p>Patient #:${patient[3]} <br>Name: ${patient[1]} ${patient[2]} <br>Symptom: ${patient[4]}<br>Doctor: ${patient[6]}</p> <hr>`;
    });     
    patientContainer.innerHTML = output;
  }
  return 1;
}


export function searchPatient() {
    let count = 0; //how many instances found
    let searchName = document.getElementById("patSearch").value;
    let output = `<p>Results for: ${searchName} </p>`;
    updatedPatients.forEach(function(patient){
      //checks if searchname is present in any of the patient's info, meaning you can search id, patient name, etc
      if((patient[3]==(searchName))||((patient[1].toLowerCase())==searchName.toLowerCase())||(patient[2].toLowerCase()==searchName.toLowerCase())||(patient[1].toLowerCase()+" "+patient[2].toLowerCase()==searchName.toLowerCase())){
        output += `<p>Patient #:${patient[3]} <br>Name: ${patient[1]} ${patient[2]} <br>Symptom: ${patient[4]}</p> <hr>`;
        count ++;
      }
    });
    if(count === 0){
      return output + '<br>' + 'no patients found';
    }else{
      return `${count} results found: <br> ${output}`;
    }
}

export function addPatient() {
  //initializes name & disease
  let select = document.getElementById("patP");
  let first = document.getElementById("patFN").value;
  let last = document.getElementById("patLN").value;
  let output = select.options[select.selectedIndex].value; //picks out the selected disease from dropdown
  let canAdd = true; //if nothing is wrong with the input 

  if (output != "Select An Option" && first != "" && last != "") { //if nothing is left empty
    updatedPatients.forEach(function(pat) {
      if (pat[1].toLowerCase() == first.toLowerCase() && pat[2].toLowerCase() == last.toLowerCase()) { //if username already used
        alert("person is already in the system");
        canAdd = false;
        select.value = "Select An Option";
        document.getElementById("patFN").value = "";
        document.getElementById("patLN").value = "";
      }
    });

    if (canAdd) {
      alert("Patient added");
      addPat(first, last, output);
      select.value = "Select An Option";
      document.getElementById("patFN").value = "";
      document.getElementById("patLN").value = "";
      return 1;
    } else {
      return 1;
    }
  } else {
    select.value = "Select An Option";
    document.getElementById("patFN").value = "";
    document.getElementById("patLN").value = "";
    alert("One or more fields is empty");
    return 1;
  }
}


