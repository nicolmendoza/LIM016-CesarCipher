// [Español]
// Importamos el objeto `cipher`, que contiene los métodos `encode` y `decode`
//
// [Português]
// Importamos o objeto `cipher`, que contém os métodos `encode` e `decode`

import cipher from '../src/cipher';

describe('cipher', () => {

  it('should be an object', () => {
    expect(typeof cipher).toBe('object');
  });

  describe('cipher.encode', () => {

    it('should be a function', () => {
      expect(typeof cipher.encode).toBe('function');
    });

    it('should throw TypeError when invoked with wrong argument types', () => {
      expect(() => cipher.encode()).toThrow(TypeError);
      expect(() => cipher.encode(0)).toThrow(TypeError);
      expect(() => cipher.encode(null, [])).toThrow(TypeError);
      expect(() => cipher.encode(0, 0)).toThrow(TypeError);
    });

    it('should return "HIJKLMNOPQRSTUVWXYZABCDEFG" for "ABCDEFGHIJKLMNOPQRSTUVWXYZ" with offset 33', () => {
      expect(cipher.encode(33, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe('HIJKLMNOPQRSTUVWXYZABCDEFG');
    });


    it('should return "HIJKLMNOPQRSTUVWXYZABCDEFG" for "ABCDEFGHIJKLMNOPQRSTUVWXYZ" with offset -1', () => {
      expect(cipher.encode(-1, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe('ZABCDEFGHIJKLMNOPQRSTUVWXY');
    });


    // Hacker edition
    //
    // [Español]
    // Si decides agregar soporte para minúsculas descomenta el test a
    // continuación.
    //
    // [Português]
    // Se quiser adicionar testes para letras minúsculas, descomente o teste
    // abaixo.
    //
    it('should return "hijklmnopqrstuvwxyzabcdefg" for "abcdefghijklmnopqrstuvwxyz" with offset 33', () => {
      expect(cipher.encode(33, 'abcdefghijklmnopqrstuvwxyz')).toBe('hijklmnopqrstuvwxyzabcdefg');
    });


    it('should return "zabcdefghijklmnopqrstuvwxy" for "abcdefghijklmnopqrstuvwxyz" with offset -1', () => {
      expect(cipher.encode(-1, 'abcdefghijklmnopqrstuvwxyz')).toBe('zabcdefghijklmnopqrstuvwxy');
    });

    // Hacker edition
    //
    // [Español]
    // Si decides implementar soporte para caracteres no alfabéticos descomenta
    // el test a continuación.
    //
    // [Português]
    // Se quiser adicionar testes para caracteres não alfabéticos, descomente o
    // teste abaixo.
    //
    it('should return " !@" for " !@"', () => {
      expect(cipher.encode(33, ' !@')).toBe(' !@');
    });

    it('should return "1234567890" for "0123456789" with offset 1', () => {
      expect(cipher.encode(1, '0123456789')).toBe('1234567890');
    });


    it('should return "9012345678" for "0123456789" with offset -1', () => {
      expect(cipher.encode(-1, '0123456789')).toBe('9012345678');
    });

  });

  describe('cipher.decode', () => {

    it('should be a function', () => {
      expect(typeof cipher.decode).toBe('function');
    });

    it('should throw TypeError when invoked with wrong argument types', () => {
      expect(() => cipher.decode()).toThrow(TypeError);
      expect(() => cipher.decode(0)).toThrow(TypeError);
      expect(() => cipher.decode(null, [])).toThrow(TypeError);
      expect(() => cipher.decode(0, 0)).toThrow(TypeError);
    });

    it('should return "ABCDEFGHIJKLMNOPQRSTUVWXYZ" for "HIJKLMNOPQRSTUVWXYZABCDEFG" with offset 33', () => {
      expect(cipher.decode(33, 'HIJKLMNOPQRSTUVWXYZABCDEFG')).toBe('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });

    //
    // Hacker edition
    //
    // [Español]
    // Si decides agregar soporte para minúsculas descomenta el test a
    // continuación.
    //
    // [Português]
    // Se quiser adicionar testes para letras minúsculas, descomente o teste
    // abaixo.
    //
    it('should return "abcdefghijklmnopqrstuvwxyz" for "hijklmnopqrstuvwxyzabcdefg" with offset 33', () => {
      expect(cipher.decode(33, 'hijklmnopqrstuvwxyzabcdefg')).toBe('abcdefghijklmnopqrstuvwxyz');
    });

    // Hacker edition
    //
    // [Español]
    // Si decides implementar soporte para caracteres no alfabéticos descomenta
    // el test a continuación.
    //
    // [Português]
    // Se quiser adicionar testes para caracteres não alfabéticos, descomente o
    // teste abaixo.
    //
    it('should return " !@" para " !@"', () => {
      expect(cipher.decode(33, ' !@')).toBe(' !@');
    });

    it('should return "0123456789" for "1234567890" with offset 1', () => {
      expect(cipher.decode(1, '1234567890')).toBe('0123456789');
    });


  });

});
