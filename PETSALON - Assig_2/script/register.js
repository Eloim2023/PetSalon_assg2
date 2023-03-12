//object literal
let petSalon ={
    name : "The fashion pet",
    address:{
        city:"Mexicali",
        street:"Lazaro Cardenas Blvd.",
        zip:"21100"
        },
    hours:{
        open:"9:00 am",
        close:"4:00 pm"
        },
    pets:[]
}

//object constructor 
//------parameters
function Pet(n,a,g,s,t,o1,b,o2,o,p){
    //attr or properties
    this.name=n;
    this.age=a;
    this.gender=g;
    this.service=s;
    this.type=t;
    this.other1=o1
    this.breed=b;
    this.other2=o2
    this.owner=o;
    this.phone=p;
}

let inputName=document.getElementById("txtName");
let inputAge=document.getElementById("txtAge");
let inputGender=document.getElementById("txtGender");
let inputService=document.getElementById("txtService");
let inputType=document.getElementById("txtType");
let inputOther1=document.getElementById("txtOther1");
let inputBreed=document.getElementById("txtBreed");
let inputOther2=document.getElementById("txtOther2");
let inputOwner=document.getElementById("txtOwner");
let inputPhone=document.getElementById("txtPhone");

//register function
function register(){
    //console.log("register");
    //let inputName = document.getElementById("txtName");
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputService.value,inputType.value,inputOther1.value,inputBreed.value,inputOther2.value,inputOwner.value,inputPhone.value);
    petSalon.pets.push(newPet);
    console.log(petSalon.pets);
    clearForm();
    //document.getElementById("txtName").value

}
function clearForm(){
    inputName.value="";
    inputAge.value="";
    inputGender.value="";
    inputService.value="";
    inputType.value="";
    inputOther1.value="";
    inputBreed.value="";
    inputOther2.value="";
    inputOwner.value="";
    inputPhone.value="";
}
function init(){
    console.log("init");
    let pet1 = new Pet("Scooby",60,"Male","Grooming");
    let pet2 = new Pet("Scrappy",50,"Male","Vaccines");
    console.log(pet1,pet2);
    petSalon.pets.push(pet1,pet2);//push the pets into the array

}

window.onload=init;

