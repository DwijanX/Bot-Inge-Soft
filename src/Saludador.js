function Saludar(Name) {
    return "Hola "+Name;
  }
function SaludarByHour(Name,hour) {
  let ans=""
  if (hour>0 && hour<12)
  {
    ans+="Buenos dias "
  }
  else if (hour>=12 && hour<=18)
  {
    ans+="Buenas tardes "
  }
  else
  {
    ans+="Buenas Noches "
  }
  return ans+Name

}
  
export {Saludar,SaludarByHour};
  