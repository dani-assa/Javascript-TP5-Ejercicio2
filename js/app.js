/*2- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:

esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona, permitiendo ingresar las propiedades mediante un formulario, también agregar los botones “mostrar generación”, es “mayor de edad” e indicar en un alert el resultado de la función correspondiente.

*/

class Persona {
  constructor (nombre, edad, dni, sexo, peso, altura, añoDeNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.añoDeNacimiento = añoDeNacimiento;
  }

  mostrarGeneracion() {
    if (this.añoDeNacimiento >= 1930 && this.añoDeNacimiento <= 1948) {
      document.write(`<p> Pertenece a la generación <b> Silent Generation </b> y su rasgo caracteristico es: <b> Austeridad </b>`);
    } else if (this.añoDeNacimiento >= 1949 && this.añoDeNacimiento <= 1968) {
      document.write(`<p> Pertenece a la generación <b> Baby Boom </b> y su rasgo caracteristico es: <b> Ambición </b>`);
    } else if (this.añoDeNacimiento >= 1969 && this.añoDeNacimiento <= 1980) {
    document.write(`<p> Pertenece a la <b> Generatión X </b> y su rasgo caracteristico es: <b> Obsesión por el exito </b>`);
    } else if (this.añoDeNacimiento >= 1981 && this.añoDeNacimiento <= 1993) {
    document.write(`<p> Pertenece a la <b> Generatión Y (millennials) </b> y su rasgo caracteristico es: <b> Frustración </b>`);
    } else if (this.añoDeNacimiento >= 1994 && this.añoDeNacimiento <= 2010) {
    document.write(`<p> Pertenece a la <b> Generatión Z </b> y su rasgo caracteristico es: <b> Irreverancia </b>`);
    } else {
    alert('El año ingresado es incorrecto.')
    }
  }
  esMayorDeEdad () {
    if (this.edad >= 18 ) {
      document.write(`<br> <br> ${this.nombre} es mayor de edad. <br> <br>`)
    } else {
      document.write(`<br> <br> ${this.nombre} es menor de edad. <br> <br>`)
    }
  }
  mostrarDatos() {
    document.write(`
    Nombre: ${this.nombre} <br>
    Edad: ${this.edad} años <br>
    DNI: ${this.dni} <br>
    Sexo: ${this.sexo} <br>
    Peso: ${this.peso} kg <br>
    Altura: ${this.altura} cm <br>
    Año de Nacimiento: ${this.añoDeNacimiento} <br>
    `)
  }
  
};

let nombre = document.querySelector('#inputNombre');
let edad = document.querySelector('#inputEdad');
let dni = document.querySelector('#inputDNI');
let sexo = document.querySelector('#inputSexo');
let peso = document.querySelector('#inputPeso');
let altura = document.querySelector('#inputAltura');
let añoDeNacimiento = document.querySelector('#inputAñoDeNac');



const mostrarDatos = (e) => {
  e.preventDefault();
  const personaNueva = new Persona (
    nombre.value,
    edad.value,
    dni.value,
    sexo.value,
    peso.value,
    altura.value,
    añoDeNacimiento.value
  )
  
  let mostrarDatos = document.querySelector('#msjMostrarDatos');
  mostrarDatos.className = "alert alert-info"
  mostrarDatos.innerHTML = `
  <b>Nombre:</b> ${nombre.value} <br>
  <b>Edad:</b> ${edad.value} años <br>
  <b>DNI:</b> ${dni.value} <br>
  <b>Sexo:</b> ${sexo.value} <br>
  <b>Peso:</b> ${peso.value} kg <br>
  <b>Altura:</b> ${altura.value} cm <br>
  <b>Año de Nacimiento:</b> ${añoDeNacimiento.value} <br>
  `

  
  const personaJson = JSON.stringify(personaNueva);
  localStorage.setItem('user', personaJson);
  // const personaObject = JSON.parse(personaJson);
  // console.log(localStorage.getItem('user'));
  // console.log(personaObject);
}

document.querySelector('#formDatos').addEventListener('submit', mostrarDatos);

const mostrarGeneracion = (e) => {
  // e.preventDefault()
  let mensaje = document.querySelector('#msjGeneracion');

  if (añoDeNacimiento.value >= 1930 && añoDeNacimiento.value <= 1948) {
    mensaje.className = "alert alert-primary"
    mensaje.innerHTML = "Pertenece a la generación <b> Silent Generation </b> y su rasgo caracteristico es: <b> Austeridad </b>"
  } else if (añoDeNacimiento.value >= 1949 && añoDeNacimiento.value <= 1968) {
    mensaje.className = "alert alert-primary"
    mensaje.innerHTML = "Pertenece a la generación <b> Baby Boom </b> y su rasgo caracteristico es: <b> Ambición </b>"
  } else if (añoDeNacimiento.value >= 1969 && añoDeNacimiento.value <= 1980) {
    mensaje.className = "alert alert-primary"
    mensaje.innerHTML = "Pertenece a la <b> Generatión X </b> y su rasgo caracteristico es: <b> Obsesión por el exito </b>"
  } else if (añoDeNacimiento.value >= 1981 && añoDeNacimiento.value <= 1993) {
    mensaje.className = "alert alert-primary"
    mensaje.innerHTML = "Pertenece a la <b> Generatión Y (millennials) </b> y su rasgo caracteristico es: <b> Frustración </b>"
  } else if (añoDeNacimiento.value >= 1994 && añoDeNacimiento.value <= 2010) {
    mensaje.className = "alert alert-primary"
    mensaje.innerHTML = "Pertenece a la <b> Generatión Z </b> y su rasgo caracteristico es: <b> Irreverancia </b>"
  } else {
    mensaje.className = "alert alert-warning"
    mensaje.innerHTML = "El año ingresado es incorrecto"
  }
}

document.querySelector('#btnMostrarGeneracion').addEventListener('click',
  mostrarGeneracion);


const esMayorDeEdad = () => {
  let esMayorDeEdad = document.querySelector('#msjMayorDeEdad');
  if (edad.value >= 18 ) {
    esMayorDeEdad.className = "alert alert-ligth"
    esMayorDeEdad.innerHTML = `${nombre.value} es <b>mayor</b> de edad.`
  } else {
    esMayorDeEdad.className = "alert alert-success"
    esMayorDeEdad.innerHTML = `${nombre.value} es <b>menor</b> de edad.`
  }
}

document.querySelector('#btnMayorDeEdad').addEventListener('click', esMayorDeEdad);



