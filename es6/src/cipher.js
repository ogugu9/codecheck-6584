export class Cipher {

  constructor(key) {
    this.getCase = function (char = '') {
      if (char.match(/[a-z]/)) {
        return 'a';
      } else if (char.match(/[A-Z]/)) {
        return 'A';
      } else {
        return '';
      }
    };
  }

  encrypt(str) {
    var key = this.key;
    var getCase = this.getCase;

    var ary = str.split('').map(function (s) {
      var code = s.charCodeAt() ;
      var base = getCase(s).charCodeAt();
      if (base) {
        code += -base;
        code = (code + key) % 26 + base;
        s = String.fromCodePoint(code);
      }
      return s;
    });

    return ary.join('');
  }

  decrypt(str) {
    var key = this.key;
    var getCase = this.getCase;

    var ary = str.split('').map(function (s) {
      var code = s.charCodeAt() ;
      var base = getCase(s).charCodeAt();
      if (base) {
        code += -base;
        code = (code-key) % 26;
        if (code < 0) code += 26;
        code += base;
        s = String.fromCodePoint(code);
      }
      return s;
    });

    return ary.join('');
  }

}

export class CaesarCipher extends Cipher {

  constructor(key) {
    super(key);
    if (key < 0) {
      this.key = key % 26 + 26;
    } else {
      this.key = key;
    }
  }

}
