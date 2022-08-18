
const GreetsOnEnglish=["Hello ","Good Morning ","Good Afternoon ","Good Night "]
const GreetsOnSpanish=["Hola ","Buenos dias ","Buenas tardes ","Buenas Noches "]

  
function getGreetPreambleWithHour(selectedLanguageGreets) {
  let ans=""
  let today = new Date();   
  let hour=today.getHours()
  if (hour>0 && hour<12)
  {
    ans+=selectedLanguageGreets[1]
  }
  else if (hour>=12 && hour<=18)
  {
    ans+=selectedLanguageGreets[2]
  }
  else
  {
    ans+=selectedLanguageGreets[3]
  }
  return ans

}
  

function Saludar(Name="", GreetByHour=false,Language="es") {
  let Greet=""
  let selectedLanguageGreets
  if (Language=="es")
  {
    selectedLanguageGreets=GreetsOnSpanish
  }
  else if(Language=="en")
  {
    selectedLanguageGreets=GreetsOnEnglish
  }


  if(GreetByHour)
  {
    Greet+=getGreetPreambleWithHour(selectedLanguageGreets)
  }
  else
  {
    Greet+=selectedLanguageGreets[0]
  }
  return Greet+Name;
}
export default Saludar;
  