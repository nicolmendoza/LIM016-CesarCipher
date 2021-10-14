import cipher from './cipher.js';


let resultado = document.getElementById("resultado")
let resultadoDes = document.getElementById('resultadoDescifrado')
var mensajero = document.getElementById('mensaje')
var dezplazamiento = document.getElementById('desplazamiento')
const enviar=document.getElementById('enviar')
const descifrar=document.getElementById('descifrar')
const copiar=document.getElementById('copiar')
const limpiar=document.getElementById('limpiar')

let mnj;
let num;



enviar.addEventListener('click',()=> {

     mnj = mensajero.value;
     num = Number(dezplazamiento.value);
    // console.log(mnj, num);
    cipher.encode(num,mnj )

    // console.log(cipher.encode(mnj, num));
    var ecp = resultado.textContent = cipher.encode(num,mnj)
    return mensajero.value = ecp

})




descifrar.addEventListener('click',()=>{


    cipher.decode( Number(dezplazamiento.value),mensajero.value)

    // console.log(cipher.decode(mensajero.value, Number(dezplazamiento.value)))
    var ecp = resultadoDes.textContent = cipher.decode( Number(dezplazamiento.value),mensajero.value)
    return mensajero.value = ecp
})



copiar.addEventListener('click',(e)=>{
  e.preventDefault()

  document.getElementById('mensaje').select()
let texto=mensajero.value
console.log(typeof(texto));


document.execCommand('copy')
})

limpiar.addEventListener('click',(e)=>{
  e.preventDefault()
  mensajero.value=""
})
