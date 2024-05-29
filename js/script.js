
//prompt mayor de 18
let nombre = prompt("Ingrese su nombre");
let edad = prompt("Ingrese su edad");
if (edad >=18)
{
  alert(nombre +  " usted es mayor de edad,puede acceder al sitio")
}
if(edad <18)
{
  alert(nombre + " usted es menor de edad,accede al sitio bajo su propia responsabilidad")
}


//menu pantalla<768


const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})





function linkExterno(){
    alert('¿Estas seguro que deseas abandonar está página?');
}

// galeria de videos

document.querySelectorAll('.videocontainer video').forEach(vid => {

  vid.onclick = () =>{
    document.querySelector('.popupvideo').style.display = 'block';
    document.querySelector('.popupvideo video').src = vid.getAttribute('src');
  }
});	

  document.querySelector('.popupvideo span').onclick = () => {
  document.querySelector('.popupvideo').style.display = 'none';		
  document.querySelector('.popupvideo video').pause();
  
}



