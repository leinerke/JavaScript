var pantalla = document.getElementById('display');

var calculadora = {
  a: 0,
  b: 0,
  c: 0,
  suma: function() {},
  resta: function() {},
  multiplicacion: function() {},
  divicion: function() {},
  igual: function() {},
  borrar: function() {},
  escribir: function(a) {},
  escribir0: function(a) {},
  escribirPunto: function() {}
};
/*
 *               Botones
 */
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
  btnC: document.getElementById('on'),
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
/*
 *               BotonIgual
 */
botones.btnIgual.addEventListener('mousedown', function() {
  botones.presionar2(botones.btnIgual);
  calculadora.igual();
});
botones.btnIgual.addEventListener('mouseup', function() {
  botones.soltar2(botones.btnIgual);
});
/*
 *               BotonPunto
 */
botones.btnPunto.addEventListener('mousedown', function() {
  botones.presionar2(botones.btnPunto);
  calculadora.escribirPunto();
});
botones.btnPunto.addEventListener('mouseup', function() {
  botones.soltar2(botones.btnPunto);
});
/*
 *               Boton 0
 */
botones.btn0.addEventListener('mousedown', function() {
  botones.presionar2(botones.btn0);
  calculadora.escribir0();
});
botones.btn0.addEventListener('mouseup', function() {
  botones.soltar2(botones.btn0);
});
/*
 *               Boton 3
 */
botones.btn3.addEventListener('mousedown', function() {
  botones.presionar2(botones.btn3);
  calculadora.escribir(3);
});
botones.btn3.addEventListener('mouseup', function() {
  botones.soltar2(botones.btn3);
});
/*
 *               Boton 2
 */
botones.btn2.addEventListener('mousedown', function() {
  botones.presionar2(botones.btn2);
  calculadora.escribir(2);
});
botones.btn2.addEventListener('mouseup', function() {
  botones.soltar2(botones.btn2);
});
/*
 *               Boton1
 */
botones.btn1.addEventListener('mousedown', function() {
  botones.presionar2(botones.btn1);
  calculadora.escribir(1);
});
botones.btn1.addEventListener('mouseup', function() {
  botones.soltar2(botones.btn1);
});
/*
 *               Boton 5
 */
botones.btn5.addEventListener('mousedown', function() {
  botones.presionar(botones.btn5);
  calculadora.escribir(5);
});
botones.btn5.addEventListener('mouseup', function() {
  botones.soltar(botones.btn5);
});
/*
 *               Boton 6
 */
botones.btn6.addEventListener('mousedown', function() {
  botones.presionar(botones.btn6);
  calculadora.escribir(6);
});
botones.btn6.addEventListener('mouseup', function() {
  botones.soltar(botones.btn6);
});
/*
 *               Boton 4
 */
botones.btn4.addEventListener('mousedown', function() {
  botones.presionar(botones.btn4);
  calculadora.escribir(4);
});
botones.btn4.addEventListener('mouseup', function() {
  botones.soltar(botones.btn4);
});
/*
 *               Boton 9
 */
botones.btn9.addEventListener('mousedown', function() {
  botones.presionar(botones.btn9);
  calculadora.escribir(9);
});
botones.btn9.addEventListener('mouseup', function() {
  botones.soltar(botones.btn9);
});
/*
 *               Boton 8
 */
botones.btn8.addEventListener('mousedown', function() {
  botones.presionar(botones.btn8);
  calculadora.escribir(8);
});
botones.btn8.addEventListener('mouseup', function() {
  botones.soltar(botones.btn8);
});
/*
 *               Boton 7
 */
botones.btn7.addEventListener('mousedown', function() {
  botones.presionar(botones.btn7);
  calculadora.escribir(7);
});
botones.btn7.addEventListener('mouseup', function() {
  botones.soltar(botones.btn7);
});
/*
 *               Boton Raiz
 */
botones.btnRaiz.addEventListener('mousedown', function() {
  botones.presionar(botones.btnRaiz);
});
botones.btnRaiz.addEventListener('mouseup', function() {
  botones.soltar(botones.btnRaiz);
});
/*
 *               Boton Signo
 */
botones.btnSig.addEventListener('mousedown', function() {
  botones.presionar(botones.btnSig);
});
botones.btnSig.addEventListener('mouseup', function() {
  botones.soltar(botones.btnSig);
});
/*
 *               Boton Borrar
 */
botones.btnC.addEventListener('mousedown', function() {
  botones.presionar(botones.btnC);
  calculadora.borrar();
});
botones.btnC.addEventListener('mouseup', function() {
  botones.soltar(botones.btnC);
});
/*
 *               Boton Menos
 */
botones.btnMenos.addEventListener('mousedown', function() {
  botones.presionar(botones.btnMenos);
  calculadora.menos();
});
botones.btnMenos.addEventListener('mouseup', function() {
  botones.soltar(botones.btnMenos);
});
/*
 *               Boton Por
 */
botones.btnPor.addEventListener('mousedown', function() {
  botones.presionar(botones.btnPor);
  calculadora.multiplicacion();
});
botones.btnPor.addEventListener('mouseup', function() {
  botones.soltar(botones.btnPor);
});
/*
 *               Boton Div
 */
botones.btnDiv.addEventListener('mousedown', function() {
  botones.presionar(botones.btnDiv);
  calculadora.divicion();
});
botones.btnDiv.addEventListener('mouseup', function() {
  botones.soltar(botones.btnDiv);
});
/*
 *               Boton Mas
 */
botones.btnMas.addEventListener('mousedown', function() {
  botones.presionar3(botones.btnMas);
  calculadora.suma();
});
botones.btnMas.addEventListener('mouseup', function() {
  botones.soltar3(botones.btnMas);
});
