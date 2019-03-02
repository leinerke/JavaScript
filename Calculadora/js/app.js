var botones = {
  btn1: document.getElementById('1'),
  btn2: document.getElementById('2'),
  btn3: document.getElementById('3'),
  btn4: document.getElementById('4'),
  btn5: document.getElementById('5'),
  btn6: document.getElementById('6'),
  btn7: document.getElementById('7'),
  btn8: document.getElementById('8'),
  btn9: document.getElementById('9'),
  btn0: document.getElementById('0'),
  btnPunto: document.getElementById('punto'),
  btnIgual: document.getElementById('igual'),
  btnMas: document.getElementById('mas'),
  btnMenos: document.getElementById('menos'),
  btnPor: document.getElementById('por'),
  btnDiv: document.getElementById('dividido'),
  btnBorrar: document.getElementById('on'),
  btnSig: document.getElementById('sign'),
  btnRaiz: document.getElementById('raiz'),
  presionar: function(a) {
    a.style.width = '21%';
    a.style.height = '61.91px';
  },
  presionar2: function(a) {
    a.style.width = '28%';
    a.style.height = '61.91px';
  },
  presionar3: function(a) {
    a.style.width = '88%';
    a.style.height = '98%';
  },
  soltar: function(a) {
    a.style.width = '22%';
    a.style.height = '62.91px';
  },
  soltar2: function(a) {
    a.style.width = '29%';
    a.style.height = '62.91px';
  },
  soltar3: function(a) {
    a.style.width = '90%';
    a.style.height = '100%';
  }
};

var pantalla = document.getElementById('display'),
  primerNumero = true,
  punto = false,
  sumar = false,
  resta = false,
  por = false,
  div = false,
  consecutivo = false,
  repetir = false,
  negativo = false;

var calculadora = {
  a: 0,
  b: 0,
  obtenerNumeros: function() {
    if (primerNumero === true) {
      this.a = parseFloat(pantalla.innerHTML);
      primerNumero = false;
    } else {
      if (consecutivo === false) {
        if (pantalla.innerHTML != "") {
          this.b = parseFloat(pantalla.innerHTML);
        } else if (pantalla.innerHTML == "") {
          this.b = 0;
        }
      }
    }
    pantalla.innerHTML = "";
  },
  suma: function() {
    this.obtenerNumeros();

    if (repetir === false) {
      if (sumar === true) {
        this.a += this.b;
      }
    }
    sumar = true;
    resta = false;
    por = false;
    div = false;
    punto = false;
    return this.a;
  },
  resta: function() {
    this.obtenerNumeros();

    if (repetir === false) {
      if (resta === true) {
        this.a -= this.b;
      }
    }
    sumar = false;
    resta = true;
    por = false;
    div = false;
    punto = false;
    return this.a;
  },
  multiplicacion: function() {
    this.obtenerNumeros();

    if (repetir === false) {
      if (por === true) {
        this.a *= this.b;
      }
    }
    sumar = false;
    resta = false;
    por = true;
    div = false;
    punto = false;
    return this.a;
  },
  divicion: function() {
    this.obtenerNumeros();

    if (repetir === false) {
      if (div === true) {
        this.a /= this.b;
      }
    }
    sumar = false;
    resta = false;
    por = false;
    div = true;
    punto = false;
    return this.a;
  },
  igual: function() {
    if (repetir === true) {
      repetir = false;
    }

    if (sumar === true) {
      this.suma();
      pantalla.innerHTML = "";
    } else if (resta === true) {
      this.resta();
      pantalla.innerHTML = "";
    } else if (por === true) {
      this.multiplicacion();
      pantalla.innerHTML = "";
    } else if (div === true) {
      this.divicion();
      pantalla.innerHTML = "";
    }

    if (consecutivo === false) {
      consecutivo = true;
    }

    if (this.a != 0) {
      if (this.a > 0) {
        switch (this.a.toString().length) {
          case 1:
            pantalla.innerHTML = this.a.toPrecision(1);
            break;
          case 2:
            pantalla.innerHTML = this.a.toPrecision(2);
            break;
          case 3:
            pantalla.innerHTML = this.a.toPrecision(3);
            break;
          case 4:
            pantalla.innerHTML = this.a.toPrecision(4);
            break;
          case 5:
            pantalla.innerHTML = this.a.toPrecision(5);
            break;
          case 6:
            pantalla.innerHTML = this.a.toPrecision(6);
            break;
          case 7:
            pantalla.innerHTML = this.a.toPrecision(7);
            break;
          case 8:
            pantalla.innerHTML = this.a.toPrecision(8);
            break;
          default:
            pantalla.innerHTML = this.a.toExponential(4);
            break;
        }
      } else if (this.a < 0) {
        switch (this.a.toString().length) {
          case 1:
            pantalla.innerHTML = this.a.toPrecision(0);
            break;
          case 2:
            pantalla.innerHTML = this.a.toPrecision(1);
            break;
          case 3:
            pantalla.innerHTML = this.a.toPrecision(2);
            break;
          case 4:
            pantalla.innerHTML = this.a.toPrecision(3);
            break;
          case 5:
            pantalla.innerHTML = this.a.toPrecision(4);
            break;
          case 6:
            pantalla.innerHTML = this.a.toPrecision(5);
            break;
          case 7:
            pantalla.innerHTML = this.a.toPrecision(6);
            break;
          case 8:
            pantalla.innerHTML = this.a.toPrecision(7);
            break;
          default:
            pantalla.innerHTML = this.a.toExponential(3);
            break;
        }
      }
    } else {
      pantalla.innerHTML = this.a;
    }
  },
  borrar: function() {
    this.a = 0;
    this.b = 0;
    pantalla.innerHTML = "0";
    primerNumero = true;
    punto = false;
    sumar = false;
    resta = false;
    por = false;
    div = false;
    consecutivo = false;
    repetir = false;
    negativo = false;
  },
  sign: function() {
    if (consecutivo === false) {
      if (pantalla.innerHTML != 0 || pantalla.innerHTML != "") {
        pantalla.innerHTML = -pantalla.innerHTML;
      }
    }
  },
  escribir: function(a) {
    if (pantalla.innerHTML.length < 9) {
      if (pantalla.innerHTML == "0") {
        pantalla.innerHTML = "";
        pantalla.innerHTML += a;
      } else if (pantalla.innerHTML == "0.") {
        pantalla.innerHTML += a;
      } else {
        pantalla.innerHTML += a;
      }
    }
  },
  escribir0: function() {
    if (pantalla.innerHTML.length < 9) {
      if (pantalla.innerHTML != 0) {
        pantalla.innerHTML += 0;
      }
    }
  },
  escribirPunto: function() {
    if (punto == false) {
      pantalla.innerHTML += ".";
      punto = true;
    }
  }
};



botones.btnIgual.addEventListener('mousedown', function() {
  botones.presionar2(botones.btnIgual);
  calculadora.igual();
});
botones.btnIgual.addEventListener('mouseup', function() {
  botones.soltar2(botones.btnIgual);
});


botones.btnPunto.addEventListener('mousedown', function() {
  botones.presionar2(botones.btnPunto);
  calculadora.escribirPunto();
});
botones.btnPunto.addEventListener('mouseup', function() {
  botones.soltar2(botones.btnPunto);
});


botones.btn0.addEventListener('mousedown', function() {
  botones.presionar2(botones.btn0);
  calculadora.escribir0();
});
botones.btn0.addEventListener('mouseup', function() {
  botones.soltar2(botones.btn0);
});


botones.btn3.addEventListener('mousedown', function() {
  botones.presionar2(botones.btn3);
  calculadora.escribir(3);
});
botones.btn3.addEventListener('mouseup', function() {
  botones.soltar2(botones.btn3);
});


botones.btn2.addEventListener('mousedown', function() {
  botones.presionar2(botones.btn2);
  calculadora.escribir(2);
});
botones.btn2.addEventListener('mouseup', function() {
  botones.soltar2(botones.btn2);
});


botones.btn1.addEventListener('mousedown', function() {
  botones.presionar2(botones.btn1);
  calculadora.escribir(1);
});
botones.btn1.addEventListener('mouseup', function() {
  botones.soltar2(botones.btn1);
});


botones.btn5.addEventListener('mousedown', function() {
  botones.presionar(botones.btn5);
  calculadora.escribir(5);
});
botones.btn5.addEventListener('mouseup', function() {
  botones.soltar(botones.btn5);
});


botones.btn6.addEventListener('mousedown', function() {
  botones.presionar(botones.btn6);
  calculadora.escribir(6);
});
botones.btn6.addEventListener('mouseup', function() {
  botones.soltar(botones.btn6);
});


botones.btn4.addEventListener('mousedown', function() {
  botones.presionar(botones.btn4);
  calculadora.escribir(4);
});
botones.btn4.addEventListener('mouseup', function() {
  botones.soltar(botones.btn4);
});


botones.btn9.addEventListener('mousedown', function() {
  botones.presionar(botones.btn9);
  calculadora.escribir(9);
});
botones.btn9.addEventListener('mouseup', function() {
  botones.soltar(botones.btn9);
});


botones.btn8.addEventListener('mousedown', function() {
  botones.presionar(botones.btn8);
  calculadora.escribir(8);
});
botones.btn8.addEventListener('mouseup', function() {
  botones.soltar(botones.btn8);
});


botones.btn7.addEventListener('mousedown', function() {
  botones.presionar(botones.btn7);
  calculadora.escribir(7);
});
botones.btn7.addEventListener('mouseup', function() {
  botones.soltar(botones.btn7);
});


botones.btnRaiz.addEventListener('mousedown', function() {
  botones.presionar(botones.btnRaiz);
});
botones.btnRaiz.addEventListener('mouseup', function() {
  botones.soltar(botones.btnRaiz);
});


botones.btnSig.addEventListener('mousedown', function() {
  botones.presionar(botones.btnSig);
  calculadora.sign();
});
botones.btnSig.addEventListener('mouseup', function() {
  botones.soltar(botones.btnSig);
});


botones.btnBorrar.addEventListener('mousedown', function() {
  botones.presionar(botones.btnBorrar);
  calculadora.borrar();
});
botones.btnBorrar.addEventListener('mouseup', function() {
  botones.soltar(botones.btnBorrar);
});


botones.btnMenos.addEventListener('mousedown', function() {
  botones.presionar(botones.btnMenos);
  if (consecutivo === true) {
    repetir = true;
  }
  consecutivo = false;
  calculadora.resta();
});
botones.btnMenos.addEventListener('mouseup', function() {
  botones.soltar(botones.btnMenos);
});


botones.btnPor.addEventListener('mousedown', function() {
  botones.presionar(botones.btnPor);
  if (consecutivo === true) {
    repetir = true;
  }
  consecutivo = false;
  calculadora.multiplicacion();
});
botones.btnPor.addEventListener('mouseup', function() {
  botones.soltar(botones.btnPor);
});


botones.btnDiv.addEventListener('mousedown', function() {
  botones.presionar(botones.btnDiv);
  if (consecutivo === true) {
    repetir = true;
  }
  consecutivo = false;
  calculadora.divicion();
});
botones.btnDiv.addEventListener('mouseup', function() {
  botones.soltar(botones.btnDiv);
});


botones.btnMas.addEventListener('mousedown', function() {
  botones.presionar3(botones.btnMas);
  if (consecutivo === true) {
    repetir = true;
  }
  consecutivo = false;
  calculadora.suma();
});
botones.btnMas.addEventListener('mouseup', function() {
  botones.soltar3(botones.btnMas);
});
