const servicios = [
  prompt("Ingresa un servicio: Depilacion, Masajes, Cosmetologia o Belleza"),
  prompt("Ingresa un servicio: Depilacion, Masajes, Cosmetologia o Belleza"),
  prompt("Ingresa un servicio: Depilacion, Masajes, Cosmetologia o Belleza"),
  prompt("Ingresa un servicio: Depilacion, Masajes, Cosmetologia o Belleza"),
];
let select = document.createElement("select");
for (let index = 0; index < servicios.length; index++) {
  select.innerHTML += `<option value='${index}'>${servicios[index]}</option>`;
}
document.body.appendChild(select);
