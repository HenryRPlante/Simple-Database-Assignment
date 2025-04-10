import { checkDoctor } from './doctors.js';

//people is a given list from the project outline, can change as needed
const people =
  "P Edwin McCain 5 Liver_Cirrhosis 123121234 Steinmetz P John Marshall 6 Kidney_Disease 123123111 Spyropolous P Bethany Burian 7 Lung_Cancer 123122222 Spyropolous P Kim Kardashian 8 Asthma 123123333 Spyropolous P Mitt Romney 9 Anemia 1 Pickett P Barack Obama 10 Stroke 123546789 Spyropolous P Anthony Spyropolous 11 Eczema 198764532 Steinmetz P Dane Cook 12 Migraine 165432789 Spyropolous P Daniel Kennedy 13 Psoriasis 178564329 Spyropolous P Isaac Roberts 14 Gastritis 198723456 Steinmetz P George Georgington 15 Fibromyalgia 523486486 Steinmetz P Santa Claus 16 Sleep_Apnea 2348730 Spyropolous P Dan Ken 17 Parkinson's_Disease 843153005 Steinmetz P Jon Phillips 18 Tuberculosis 10000 Steinmetz P Yurma Omm 19 Leukemia 132850880 Steinmetz P Bussij Jimusk 20 Lung_Cancer 225254589 Pickett P Krafic Jumill 21 Skin_Cancer 554578956 Pickett P Munsint Ulferic 22 Rheumatoid_Arthritis 321654987 Steinmetz P Malloric Hail 23 Kidney_Stones 14785458 Pickett P Senjon Turfolk 24 Alzheimer's_Disease 456123987 Steinmetz P Herman Cain 25 Bladder_Cancer 12345690 Pickett P Rob Gronkowski 26 Liver_Cirrhosis 871281833 Spyropolous P Hugh Man 27 Bronchitis 666000 Spyropolous P Latooviuss Flaviosity 28 Osteoarthritis 120395864 Steinmetz P Tom Crooooze 29 Melanoma 52893572 Spyropolous P Thaddeus O'Lagerflask 30 Testicular_Cancer 724836873 Steinmetz P Yvette Gregory 31 Lymphoma 782045789 Spyropolous P Victor Khatkerfreglen 32 High_Blood_Pressure 846305681 Steinmetz P Harold Faltermeyer 33 Hypertension 686696560 Pickett P Fitz Burdman 34 Multiple_Sclerosis 95486686 Spyropolous P Kushala Daora 35 Stroke 475648474 Spyropolous P Shen Guran 36 Stroke 903478540 Spyropolous P Plesioth Ridan 37 Stroke 940495400 Pickett P Richard Mike 38 Stroke 834788834 Spyropolous P Rathian Smith 39 Stroke 373629374 Steinmetz P Matthew Borland 40 Epilepsy 192837465 Pickett P Kilbey McCormick 41 Irritable_Bowel_Syndrome_(IBS) 129834765 Steinmetz P Tarver Paradise 42 Acid_Reflux 123987456 Pickett P Mary Poppins 43 Urinary_Tract_Infection_(UTI) 234567891 Pickett P Hilary Clinton 44 Urinary_Incontinence 543219876 Steinmetz P Jill Kelly 45 Anemia 696969696 Spyropolous P Rush Limbaugh 46 Ulcer 651455441 Steinmetz P Cody Ashy 47 Kidney_Disease 565656556 Steinmetz P Taylor Swift 48 Migraine 535435431 Steinmetz P Kanye West 49 Fibromyalgia 526930937 Steinmetz P Stephan Colbert 50 Sleep_Apnea 1337420 Pickett P Jimmy McMillan 51 Migraine 1234567 Steinmetz P Jequan Washington 52 Epilepsy 7654321 Spyropolous P Jane Doe 53 Psoriasis 3627362 Pickett P Late McClocklton 54 Polycystic_Ovary_Syndrome_(PCOS) 2342384 Pickett P Donald Trump 55 High_Blood_Pressure 23451234 Steinmetz P Sarah Palin 56 Systemic_Lupus_Erythematosus_(SLE) 456234456 Spyropolous P Sarah Kerrigan 57 Skin_Cancer 999999999 Pickett P Chell Redacted 58 Asthma 0 Steinmetz P Brandon Miller 59 Osteoarthritis 11111112 Steinmetz P Stephen Ross 60 Lung_Cancer 122222223 Spyropolous P Jonathon Little 61 Rheumatoid_Arthritis 233333334 Spyropolous P Timothy Odd 62 Psoriasis 344444445 Spyropolous P Michael Giant 63 Fibromyalgia 455555556 Pickett P Tarver Paradise 64 Anemia 1 Steinmetz P Sarah Darley 65 Eczema 20202 Pickett P Dude Man 66 Tuberculosis 7848583 Steinmetz P Dan Shower-Handel 67 Osteoarthritis 8375956 Steinmetz P Tyroil Smoochie-Wallace 68 Bronchitis 9037589 Spyropolous P Jackmerius Tacktheritrix 69 Alzheimer's_Disease 9376946 Pickett P Hingle McCringleberry 70 Parkinson's_Disease 8395674 Spyropolous P Colonel Sanders 71 High_Blood_Pressure 712142523 Spyropolous P Leroy Jenkins 72 Gastritis 322011337 Spyropolous P Adolf Hitler 73 Gastritis 113401945 Pickett P Honey BooBoo 74 Irritable_Bowel_Syndrome_(IBS) 999999999 Spyropolous P Chad Gallati 75 Migraine 123522587 Steinmetz P Isaac Roberts 76 Epilepsy 124147961 Steinmetz P Matthew Borland 77 Migraine 128946723 Pickett P Andrew Spyro 78 Leukemia 148626379 Pickett P Charlie Kelly 79 Sleep_Apnea 123456789 Spyropolous P Construction Noise 80 Tuberculosis 123456788 Pickett P Yugioh Johnson 81 Eczema 123456787 Steinmetz P Ronald MacDonald 82 Psoriasis 123456786 Steinmetz P Jesus Hong 83 Eczema 123456785 Pickett Dr. Dr Winifred Spyropolous 1 Rheumatologist Dr. Dr Alfred Steinmetz 2 Endocrinologist Dr. Dr Wilson Pickett 3 Neurologist Dr. Dr Gertrude Ford 4 Cardiologist";
let sortedPeople = people.split(" ");
export let updatedPatients = []; //sorted patients
export let updatedDoctors = []; //sorted doctors
export let docCount = []; //list of doctor last name and patient count
let holdingSpace = []; //used for pushing people/doctors one at a time
for (let i = 0; i < 10; i++) {
    if (sortedPeople[i - 1] === "Dr.") {//if doctor (as they have different lengths)
        for (let i1 = 0; i1 < 6; i1++) {
            holdingSpace.push(sortedPeople[i1]);
        }
        for (let i1 = 0; i1 < 6; i1++) {
            sortedPeople.shift();
        }
        updatedDoctors.push(holdingSpace);
        holdingSpace = [];
        i = 0;
    } else if (sortedPeople[i + 7] != null) {
        for (let i1 = 0; i1 < 7; i1++) {
            holdingSpace.push(sortedPeople[i1]);
        }
        for (let i1 = 0; i1 < 7; i1++) {
            sortedPeople.shift();
        }
        updatedPatients.push(holdingSpace);
        holdingSpace = [];
        i = 0;
    }
    if (sortedPeople[i] == null) { //ends loop
        //console.log(sortedPeople)
        //console.log("ending loop")
        i = 11;
    }
}

//removes underscores from disease names, as using underscores ensures proper sorting
for (let i = 0; i < updatedPatients.length; i++) { 
  if (updatedPatients[i][4].includes("_")) {
    updatedPatients[i][4] = updatedPatients[i][4].replace(/_/g, " ");
  }
}

export function updateDoc(){ //periodically updates docCount and keeps track of each doctor's patient count (doc[1])
  docCount = [];
  holdingSpace = [];
  updatedDoctors.forEach(function(doctor){
    holdingSpace.push(doctor[3]);
    holdingSpace.push(0);
    docCount.push(holdingSpace)
    holdingSpace = [];
  })
  updatedPatients.forEach(function(patient){
    docCount.forEach(function(doc){
      patient[6] = checkDoctor(patient[4]);
      if(doc[0] === patient[6]){
        doc[1]++;
      }
    })
  })
}

//adds patient
export function addPat(f,l,d){
  holdingSpace = [];
  holdingSpace.push("P");
  holdingSpace.push(f);
  holdingSpace.push(l);
  holdingSpace.push(parseInt(updatedPatients[updatedPatients.length - 1][3]) + 1) //current id + 1 
  holdingSpace.push(d)
  holdingSpace.push(parseInt(updatedPatients[updatedPatients.length - 1][5]) + 1) //current longid + 1
  holdingSpace.push(checkDoctor(d));
  updatedPatients.push(holdingSpace);
  return 1;
}
//adds doc
export function addDoc(f,l,p){
  holdingSpace = [];
  holdingSpace.push("Dr.");
  holdingSpace.push("Dr")
  holdingSpace.push(f);
  holdingSpace.push(l);
  holdingSpace.push(parseInt(updatedDoctors[updatedDoctors.length - 1][4]) + 1) //current id + 1
  holdingSpace.push(p)
  updatedDoctors.push(holdingSpace);
  return 1;
}
