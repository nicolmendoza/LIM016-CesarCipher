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

          let comprobarM = (valor - 65 + esp) % 26

          if (comprobarM < 0) {

            nuevoV = comprobarM + 91
          }
          else {
            nuevoV = comprobarM + 65
          }

        }
        else if (97 <= valor && valor <= 122) {

          let comprobarMN = (valor - 97 + esp) % 26

          if (comprobarMN < 0) {

            nuevoV = comprobarMN + 123
          }
          else {
            nuevoV = comprobarMN + 97
          }
        }

        else if (48 <= valor && valor <= 57) {

          let comprobarNM = (valor - 48 + esp) % 10

          if (comprobarNM < 0) {
            nuevoV = comprobarNM + 58
          }
          else {
            nuevoV = comprobarNM + 48
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



  decode: (esp, txt) => {

    if (esp == null || txt == []) {
      throw new TypeError

    }
    else {

      let resultado2 = "";
      let nuevoV;
      for (let i = 0; i < txt.length; i++) {
        var valor = txt.charCodeAt(i)

        if (65 <= valor && valor <= 90) {
          let comprobarMa = (valor - 65 - esp) % 26
          if (comprobarMa < 0) {

            nuevoV = comprobarMa + 91
          }
          else {
            nuevoV = comprobarMa + 65
          }


        }
        else if (97 <= valor && valor <= 122) {
          let comprobarMn = (valor - 97 - esp) % 26
          if (comprobarMn < 0) {
            nuevoV = comprobarMn + 123
          }
          else {
            nuevoV = comprobarMn + 97
          }

        }
        else if (48 <= valor && valor <= 57) {
          let comprobarNum = (valor - 48 - esp) % 10
          if (comprobarNum < 0) {
            nuevoV = comprobarNum + 58
          }
          else {
            nuevoV = comprobarNum + 48
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
