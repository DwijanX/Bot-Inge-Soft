import Saludar from "./Saludador";

const Name = document.querySelector("#Name");
const form = document.querySelector("#Saludar-Form");
const div = document.getElementById("resultado-div");
const ComboBox=document.getElementById("LangCombo")
const NameLabel=document.getElementById("NameLabel")
ComboBox.addEventListener("change",()=>
{
  let selectedLanguage = ComboBox.options[ComboBox.selectedIndex].text;
  if (selectedLanguage=="es")
  {
    NameLabel.innerHTML="Tu Nombre: "
  }
  else
  {
    NameLabel.innerHTML="Your Name: "
  }
})

form.addEventListener("submit",(event)=>
{
  event.preventDefault()
  
  let selectedLanguage = ComboBox.options[ComboBox.selectedIndex].text;
  div.innerHTML="<p>"+Saludar(Name.value,true,selectedLanguage)+"</p>"

});


