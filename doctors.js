import { updatedDoctors,docCount,addDoc } from './sort.js';
const Professions = [
  "Cardiologist", "Dermatologist", "Endocrinologist", "Gastroenterologist", "Hematologist",
  "Neurologist", "Oncologist", "Pulmonologist", "Rheumatologist", "Urologist"
];
const Cardiologist = ["High Blood Pressure", "Hypertension"];
const Dermatologist = ["Eczema", "Psoriasis", "Skin Cancer", "Melanoma"];
const Endocrinologist = ["Graves' Disease", "Addison's Disease", "Polycystic Ovary Syndrome (PCOS)"];
const Gastroenterologist = ["Acid Reflux", "Gastritis", "Irritable Bowel Syndrome (IBS)", "Liver Cirrhosis"];
const Hematologist = ["Anemia", "Leukemia", "Sickle Cell Anemia"];
const Neurologist = ["Alzheimer's Disease", "Epilepsy", "Migraine", "Multiple Sclerosis", "Parkinson's Disease", "Stroke"];
const Oncologist = ["Bladder Cancer", "Breast Cancer", "Lung Cancer", "Lymphoma", "Prostate Cancer", "Testicular Cancer", "Skin Cancer"];
const Pulmonologist = ["Asthma", "Bronchitis", "Chronic Obstructive Pulmonary Disease (COPD)", "Lung Cancer", "Sleep Apnea", "Tuberculosis"];
const Rheumatologist = ["Fibromyalgia", "Osteoarthritis", "Rheumatoid Arthritis", "Systemic Lupus Erythematosus (SLE)"];
const Urologist = ["Kidney Disease", "Kidney Stones", "Urinary Incontinence", "Urinary Tract Infection (UTI)", "Prostate Cancer"];



//refer to start1
export function start2(){
  Professions.forEach(function(prof) {
    let x = document.getElementById("docP");
    let option = document.createElement("option");
    option.textContent = prof;
    x.appendChild(option);
  });
  return 1;
}

//refer to searchpatient
export function searchDoctor() {
    let found = false;
    let output = "";
    const searchName = document.getElementById("docSearch").value;
    updatedDoctors.forEach(function(doctor){
      if((doctor[4]==(searchName))||(doctor[3].toLowerCase()===searchName.toLowerCase())||(doctor[2].toLowerCase()==searchName.toLowerCase())||(doctor[2].toLowerCase()+" "+doctor[3].toLowerCase()==searchName.toLowerCase())){
        output += `<p>Doctor #:${doctor[4]} <br>Name: ${doctor[1]} ${doctor[2]} ${doctor[3]} <br>Profession: ${doctor[5]}</p> <hr>`
        found = true;
      }
    });
    if(!found){
      return 'no doctors found with the data given';
    }else{
      return output;
    }
}
//refer to addpatient
export function addDoctor() {
  let select = document.getElementById("docP");
  let first = document.getElementById("docFN").value;
  let last = document.getElementById("docLN").value;
  let output = select.options[select.selectedIndex].value;
  let canAdd = true;
  if (output != "Select An Option" && first != "" && last != "") {
    updatedDoctors.forEach(function(doc) {
      if (doc[1].toLowerCase() == first.toLowerCase() && doc[2].toLowerCase() == last.toLowerCase()) {
        alert("Person is already in the system");
        canAdd = false;
        select.value = "Select An Option";
        document.getElementById("docFN").value = "";
        document.getElementById("docLN").value = "";
      }
    });

    
    if (canAdd) {
      alert("Doctor added");
      addDoc(first, last, output);
      select.value = "Select An Option";
      document.getElementById("docFN").value = "";
      document.getElementById("docLN").value = "";
      return 1;
    }
  } else {
    select.value = "Select An Option";
    document.getElementById("docFN").value = "";
    document.getElementById("docLN").value = "";
    alert("One or more fields are empty");
    return 1;
  }
}

//checks with a given disease what doctor will care for it, if none retuns a msg
export function checkDoctor(di) {
  for (let doctor of updatedDoctors) {
    let profession = doctor[5]; 
    let diseases;

    
    switch (profession) {
      case "Cardiologist":
        diseases = Cardiologist;
        break;
      case "Dermatologist":
        diseases = Dermatologist;
        break;
      case "Endocrinologist":
        diseases = Endocrinologist;
        break;
      case "Gastroenterologist":
        diseases = Gastroenterologist;
        break;
      case "Hematologist":
        diseases = Hematologist;
        break;
      case "Neurologist":
        diseases = Neurologist;
        break;
      case "Oncologist":
        diseases = Oncologist;
        break;
      case "Pulmonologist":
        diseases = Pulmonologist;
        break;
      case "Rheumatologist":
        diseases = Rheumatologist;
        break;
      case "Urologist":
        diseases = Urologist;
        break;
      default:
        diseases = [];
    }

    
    if (diseases.includes(di)) {
      return doctor[3]; 
    }
  }
  return "No doctor available for this symptom";
}
//refer to showpatient
export function showDoctors(clicked) {
  if(!clicked){
    document.getElementById("docButton").innerHTML = "Click to show doctors";
    document.getElementById("docOutput").innerHTML = "Doctor names will be here";
  }else{
    document.getElementById("docButton").innerHTML = "Click to hide doctors";
    const doctorContainer = document.getElementById("docOutput");
    let output = "";
  	doctorContainer.innerHTML = '';
    for(let i  = 0; i < updatedDoctors.length ;i++) {
      output += `<p>Doctor #:${updatedDoctors[i][4]} <br>Name: ${updatedDoctors[i][1]} ${updatedDoctors[i][2]} ${updatedDoctors[i][3]} <br>Profession: ${updatedDoctors[i][5]} <br>Current patients:${docCount[i][1]}</p> <hr>`;
    }
    doctorContainer.innerHTML = output;
  }
  return 1;
}
