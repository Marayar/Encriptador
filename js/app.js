const boton_Encriptar = document.querySelector(".encriptador__botones__encriptar");
const texto_Encriptar = document.querySelector(".encriptar");
const aviso = document.querySelector(".encriptador__aviso__texto");
const respuesta = document.querySelector(".resultado__resultado");
const contenido = document.querySelector(".resultado__contenedor");
const boton_Copiar = document.querySelector(".resultado__boton_Copiar");
const boton_Desencriptar = document.querySelector(".encriptador__botones__desencriptar");

boton_Encriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = texto_Encriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    Validar("1",texto,txt)
});
boton_Desencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = texto_Encriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    Validar("2",texto,txt)
});
boton_Copiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy"); 
});
function Ejecutar(sw, texto){
    if(sw=="1"){
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat"); 
    }
    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u"); 
    }
    respuesta.innerHTML = texto;
    boton_Copiar.style.visibility = "inherit";
    contenido.remove(); 
}
function Mensaje_Alerta(msg) {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight =  "800";
        aviso.textContent = msg;
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    return;
}
function Validar(swv,texto,txtf){
    if(texto == ""){
        Mensaje_Alerta("El campo de texto no debe estar vacio"); 
    }
    else if(texto !== txtf){
        Mensaje_Alerta("No debe tener acentos y caracteres especiales");         
    }
    else if(texto !== texto.toLowerCase()){
        Mensaje_Alerta("El texto debe ser todo en minúscula");
    }
    else{
        Ejecutar(swv, texto);
    }
}