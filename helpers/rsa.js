class RSAKey {
  constructor(generate) {
    if (generate) {
      // console.log("GENERATING PAIR...");
      var primes = RKSAey.generatePrimes(1e4);
      this.p =
        primes[
          Math.floor(
            Math.random() * (primes.length - 1) -
              0.9 * (primes.length - 1) +
              1 +
              0.9 * (primes.length - 1)
          )
        ];
      this.q =
        primes[
          Math.floor(
            Math.random() * (primes.length - 1) -
              0.9 * (primes.length - 1) +
              1 +
              0.9 * (primes.length - 1)
          )
        ];
      this.n = this.p * this.q;
      this.phi = (this.p - 1) * (this.q - 1);
      this.e = primes[Math.floor(Math.random() * 43 + 2)]; //any prime up to 45:199
      while (RSAKey.gcd(this.phi, this.e) != 1 || this.e < 2) {
        // console.log("invalid e");
        this.e = primes[Math.floor(Math.random() * 43 + 2)]; //any prime up to 45:199
      }
      this.d = RSAKey.modInverse(this.e, this.phi);
      if ((this.e * this.d) % this.phi != 1) {
        throw "[RSA] Failed calculating d";
      }
      //vardump
      // console.log("RSAKey made.");
      // console.log("PUBLIC KEY:");
      // console.log("\t n = " + this.n);
      // console.log("\t e = " + this.e);
      // console.log("PRIVATE KEY:");
      // console.log("\t n = " + this.n);
      // console.log("\t d = " + this.d);
    } else {
      // console.log("RSAKey made. Please set values.");
    }
  }

  setType(type) {
    if (type == "private" || type == "PRIVATE") {
      this.key = this.d;
      // console.log("TYPE = PRIVATE");
      // console.log("PRIVATE KEY:");
      // console.log("\t n = " + this.n);
      // console.log("\t d = " + this.d);
    }
    if (type == "public" || type == "PUBLIC") {
      this.key = this.e;
      // console.log("TYPE = PUBLIC");
      // console.log("PUBLIC KEY:");
      // console.log("\t n = " + this.n);
      // console.log("\t e = " + this.e);
    }
  }

  varDump() {
    // console.log("p = " + this.p);
    // console.log("q = " + this.q);
    // console.log("n = " + this.n);
    // console.log("\n");
    // console.log("phi = " + this.phi);
    // console.log("e = " + this.e);
    // console.log("d = " + this.d);
  }

  //import keys
  importPublic(key, n) {
    this.n = n;
    this.e = key;
    this.setType("public");
  }
  importPrivate(key, n) {
    this.n = n;
    this.d = key;
    this.setType("private");
  }

  //advanced math
  static generatePrimes(limit) {
    var bools = [];
    var primes = [];
    for (var i = 1; i < limit; i++) {
      bools.push(true);
    }
    for (var i = 2; i < limit; i++) {
      if (bools[i - 2]) {
        for (var j = i * 2; j <= limit; j += i) {
          bools[j - 2] = false;
        }
      }
    }
    for (var p = 0; p < bools.length; p++) {
      if (bools[p]) {
        primes.push(p + 2);
      }
    }
    return primes;
  }
  static modInverse(a, b) {
    a %= b;
    for (var x = 1; x < b; x++) {
      if ((a * x) % b == 1) {
        return x;
      }
    }
    return 1;
  }
  static gcd(a, b) {
    if (!b) {
      return a;
    }
    return RSAKey.gcd(b, a % b);
  }
}

class RSA {
  static encryptWithKey(text, keyObject) {
    // this.splitter = "\u200D"; //zero width joiner (invisible but may be incompatible for tranfers)
    this.splitter = "-"; //default

    //encrypt
    var cipherText = [];
    text = RSA.StringToCharArray(text);
    for (var i = 0; i < text.length; i++) {
      cipherText.push(
        RSA.modExp(text[i], keyObject.key, keyObject.n)
          .toString(36)
          .toUpperCase()
      );
    }
    cipherText = cipherText.toString();
    return cipherText.replace(/,/g, this.splitter);
  }

  static decryptWithKey(cipherText, keyObject) {
    // this.splitter = "\u200D"; //zero width joiner (invisible but may be incompatible for tranfers)
    this.splitter = "-";

    //decrypt

    cipherText = cipherText.split(this.splitter);
    // cipherText = cipherText.match(/.{1,4}/g);
    for (var i = 0; i < cipherText.length; i++) {
      cipherText[i] = parseInt(cipherText[i], 36);
    }
    var text = [];
    for (var i = 0; i < cipherText.length; i++) {
      text.push(RSA.modExp(cipherText[i], keyObject.key, keyObject.n));
    }
    return RSA.CharArrayToString(text);
  }

  //suporting functions
  //text to number convertions
  static StringToCharArray(string) {
    var arr = [];
    for (var i = 0; i < string.length; i++) {
      arr.push(string.charCodeAt(i));
    }
    return arr;
  }
  static CharArrayToString(array) {
    var string = "";
    for (var i = 0; i < array.length; i++) {
      string += String.fromCharCode(array[i]);
    }
    return string;
  }

  //advanced math
  static modExp(a, b, n) {
    // a^b modExp n
    a = a % n;
    var result = 1;
    var x = a;
    while (b > 0) {
      var leastSignificantBit = b % 2;
      b = Math.floor(b / 2);
      if (leastSignificantBit == 1) {
        result = result * x;
        result = result % n;
      }
      x = x * x;
      x = x % n;
    }
    return result;
  }
}

export { RSA, RSAKey };
