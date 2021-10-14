const cipher = {

  encode: (esp, txt) => {

    if (esp == null || txt == []) {
      throw new TypeError

    }
    else {
      let resultado = ""
      let nuevoV;

      for (let i = 0; i < txt.length; i++) {
        var valor = txt.charCodeAt(i)

        if (65 <= valor && valor <= 90) {
          let comprobar = (valor - 65 + esp) % 26

          if (comprobar < 0) {

            nuevoV = (valor - 65 + esp) % 26 + 91
          }
          else {
            nuevoV = (valor - 65 + esp) % 26 + 65
          }

        }
        else if (97 <= valor && valor <= 122) {

          let comprobar = (valor - 97 + esp) % 26

          if (comprobar < 0) {

            nuevoV = (valor - 97 + esp) % 26 + 123
          }
          else {
            nuevoV = (valor - 97 + esp) % 26 + 97
          }
        }

        else if (48 <= valor && valor <= 57) {
          let comprobar = (valor - 48 + esp) % 10
          if (comprobar < 0) {
            nuevoV = (valor - 48 + esp) % 10 + 58
          }
          else {
            nuevoV = (valor - 48 + esp) % 10 + 48
          }
        }


        else {
          nuevoV = valor
        }
        resultado += String.fromCharCode(nuevoV)

      }

      return resultado

    }
  },



  decode: (esp, ecp) => {

    if (esp == null || ecp == []) {
      throw new TypeError

    }
    else {

    let resultado2 = "";
    let nuevoV;
    for (let i = 0; i < ecp.length; i++) {
      var valor = ecp.charCodeAt(i)

      if (65 <= valor && valor <= 90) {
        let comprobar = (valor - 65 - esp) % 26
        if (comprobar < 0) {

          nuevoV = (valor - 65 - esp) % 26 + 91
        }
        else {
          nuevoV = (valor - 65 - esp) % 26 + 65
        }


      }
      else if (97 <= valor && valor <= 122) {
        let comprobar = (valor - 97 - esp) % 26
        if (comprobar < 0) {
          nuevoV = (valor - 97 - esp) % 26 + 123
        }
        else {
          nuevoV = (valor - 97 - esp) % 26 + 97
        }

      }
      else if (48 <= valor && valor <= 57) {
        let comprobar = (valor - 48 - esp) % 10
        if (comprobar < 0) {
          nuevoV = (valor - 48 - esp) % 10 + 58
        }
        else {
          nuevoV = (valor - 48 - esp) % 10 + 48
        }
      }


      else {
        nuevoV = valor
      }
      resultado2 += String.fromCharCode(nuevoV)

    }

    return resultado2
  }





}
}

export default cipher;
