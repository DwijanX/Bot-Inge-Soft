import {Saludar,SaludarByHour} from "./Saludador";

const Name = document.querySelector("#Name");
const form = document.querySelector("#Saludar-Form");
const div = document.getElementById("resultado-div");

form.addEventListener("submit",(event)=>
{
  event.preventDefault()
  let today = new Date();   
  let hour=today.getHours()
  console.log(hour.value);
  div.innerHTML="<p>"+SaludarByHour(Name.value,hour)+"</p>"

});


