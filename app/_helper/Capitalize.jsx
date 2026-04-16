
function Capitalize(str) {
    
  return str
    .split(" ")
    .map(kelime => kelime.charAt(0).toUpperCase() + kelime.slice(1).toLowerCase())
    .join(" ");
}


export default Capitalize
