# Cifrado César


## 1. Resumen del proyecto
El Encriptador es una interfaz que te permite cifrar y descifrar mensajes que quieres compartir de forma segura. Presenta una interfaz dinámica y fácil de utilizar. Puedes utilizarla tanto en web como en tu celular.

## 2. Definición del producto

## Principales usuarios del producto

Los usuarios a quien está dirigido el producto son todas a aquellas personas que al tener varios grupos de conversaciones por redes (WathsApp, Messenger , Telegram, Twitter ,etc) , y solo quieren que sus  mensajes sean entendidos por ciertas personas , utilizan El Encriptador para poder cifrar o descifrar sus mensajes de forma rápida y segura. Esto para mantener su privacidad en temas que son importantes para ellos.

## Objetivos de los usuarios	
Poder cifrar o descifrar sus mensajes de forma segura y fácil para poder compartirla a quienes desee.

## La problemática a resolver
La problemática que resuelve El Encriptador es el poder enviar y recibir mensajes de manera segura, para que solo pueda ser descifrado por aquellos a quienes tiene que llegar el mensaje.

## Proceso de diseño
La maquetación inicial de la interfaz se realizó en Figma.
![image](https://user-images.githubusercontent.com/87873460/137358785-16713c92-2ad0-48c3-a790-321fff64e4c5.png)

El diseño final se muestra a continuación:
Diseño web


## 6. Hacker edition

Las secciones llamadas _Hacker Edition_ son **opcionales**. Si **terminaste**
con todo lo anterior y te queda tiempo, intenta completarlas. Así podrás
profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.

La descripción general de este proyecto no menciona qué pasaría con las letras
minúsculas y otros caracteres (como espacios, puntuación, ñ, ...). El
boilerplate incluye algunos tests (comentados en principio) que puedes usar como
punto de partida para implementar el soporte para estos casos.

Tampoco se menciona qué pasaría si el offset fuera negativo. Como parte del
hacker edition te invitamos a explorar también esta caso por tu cuenta.

## 7. Consideraciones técnicas

La lógica del proyecto debe está implementada completamente en JavaScript. 

Los tests unitarios cubren un 100% de _statements_, _functions_
y _lines_,  y _branches_.

La estructura de los archivos:


./
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── cipher.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── .eslintrc
    └── cipher.spec.js
```



### Parte Obligatoria

* [ ] `README.md` incluye info sobre proceso y decisiones de diseño.
* [ ] `README.md` explica claramente quiénes son los usuarios y su relación con
  el producto.
* [ ] `README.md` explica claramente cómo el producto soluciona los
  problemas/necesidades de los usuarios.
* [ ] Usa VanillaJS.
* [ ] Implementa `cipher.encode`.
* [ ] Implementa `cipher.decode`.
* [ ] Pasa linter con configuración provista.
* [ ] Pasa pruebas unitarias.
* [ ] Pruebas unitarias cubren 70% de _statements_, _functions_ y _lines_, y un
  mínimo del 50% de _branches_.
* [ ] Interfaz permite elegir el `offset` o _desplazamiento_ a usar en el
  cifrado/descifrado.
* [ ] Interfaz permite escribir un texto para ser cifrado.
* [ ] Interfaz muestra el resultado del cifrado correctamente.
* [ ] Interfaz permite escribir un texto para ser descifrado.
* [ ] Interfaz muestra el resultado del descifrado correctamente.

### Parte Opcional: "Hacker edition"

* [ ] Cifra/descifra minúsculas
* [ ] Cifra/descifra _otros_ caracteres (espacios, puntuación, `ñ`, `á`, ...)
* [ ] Permite usar un `offset` negativo.
