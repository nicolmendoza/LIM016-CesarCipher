import cipher from './cipher.js';



const mensaje = document.getElementById('mensaje')
const dezplazamiento = document.getElementById('desplazamiento')
const cifrar=document.getElementById('cifrar')
const descifrar=document.getElementById('descifrar')
const copiar=document.getElementById('copiar')
const limpiar=document.getElementById('limpiar')

cifrar.addEventListener('click',(e)=> {

e.preventDefault()
    let ecp =  cipher.encode(Number(dezplazamiento.value),mensaje.value)
    mensaje.value = ecp

    return mensaje
})


descifrar.addEventListener('click',(e)=>{

e.preventDefault()
    var dcp = cipher.decode( Number(dezplazamiento.value),mensaje.value)
    mensaje.value = dcp

    return mensaje
})


copiar.addEventListener('click',(e)=>{
  e.preventDefault()
  document.getElementById('mensaje').select()
document.execCommand('copy')
})

limpiar.addEventListener('click',(e)=>{
  e.preventDefault()
  mensaje.value=""
})
