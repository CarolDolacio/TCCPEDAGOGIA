 //FUNÇÃO DADO

var dado = new Array()
dado [0] = "img/1.png";
dado [1] = "img/2.png";
dado [2] = "img/3.png";
dado [3] = "img/4.png";
dado [4] = "img/5.png";
dado [5] = "img/6.png";

var altDado = new Array();
altDado [0] = "1";
altDado [1] = "2";
altDado [2] = "3";
altDado [3] = "4";
altDado [4] = "5";
altDado [5] = "6";

 function girarDado(){
     
    document.getElementById('gruposImg').setAttribute('src', dado[Math.floor((Math.random() * dado.length))]);
    document.getElementById('gruposImg').setAttribute('alt', altDado[Math.floor((Math.random() * dado.length))]);

 }
 function gruposImg(){
    setInterval(function(){girarDado()},1000)
 }


 //INÍCIO DO SORTEIO CARTAS AMARELAS

 var bamarelo = new Array()
bamarelo [0] = "cartinhas/amarela/1.png";
bamarelo [1] = "cartinhas/amarela/1 - copia.png";
bamarelo [2] = "cartinhas/amarela/2.png";
bamarelo [3] = "cartinhas/amarela/2 - copia.png";
bamarelo [4] = "cartinhas/amarela/3.png";
bamarelo [5] = "cartinhas/amarela/3 - copia.png";
bamarelo [6] = "cartinhas/amarela/4.png";
bamarelo [7] = "cartinhas/amarela/4 - copia.png";
bamarelo [8] = "cartinhas/amarela/5.png";
bamarelo [9] = "cartinhas/amarela/5 - copia.png";
bamarelo [10] = "cartinhas/amarela/6.png";
bamarelo [11] = "cartinhas/amarela/6 - copia.png";
bamarelo [12] = "cartinhas/amarela/7.png";
bamarelo [13] = "cartinhas/amarela/7 - copia.png";
bamarelo [14] = "cartinhas/amarela/8.png";
bamarelo [15] = "cartinhas/amarela/8 - copia.png";
bamarelo [16] = "cartinhas/amarela/9.png";
bamarelo [17] = "cartinhas/amarela/9 - copia.png";




var altBaralhoAmarelo = new Array();
altBaralhoAmarelo  [0] = "bAmarela1";
altBaralhoAmarelo  [1] = "bAmarela2";
altBaralhoAmarelo  [2] = "bAmarela3";
altBaralhoAmarelo  [3] = "bAmarela4";
altBaralhoAmarelo  [4] = "bAmarela5";
altBaralhoAmarelo  [5] = "bAmarela6";
altBaralhoAmarelo  [6] = "bAmarela7";
altBaralhoAmarelo  [7] = "bAmarela8";
altBaralhoAmarelo  [8] = "bAmarela9";
altBaralhoAmarelo  [9] = "bAmarela10";
altBaralhoAmarelo  [10] = "bAmarela11";
altBaralhoAmarelo  [11] = "bAmarela12";
altBaralhoAmarelo  [12] = "bAmarela13";
altBaralhoAmarelo  [13] = "bAmarela14";
altBaralhoAmarelo  [14] = "bAmarela15";
altBaralhoAmarelo  [15] = "bAmarela16";
altBaralhoAmarelo  [16] = "bAmarela17";
altBaralhoAmarelo  [17] = "bAmarela18";





 function cartaAmarela(){ // aqui, a função precisa ter o mesmo nome da ação onClick do HTML
     
    document.getElementById('sorteioAmarelas').setAttribute('src', bamarelo[Math.floor((Math.random() * bamarelo.length))]);
    document.getElementById('sorteioAmarelas').setAttribute('alt', altBaralhoAmarelo[Math.floor((Math.random() * bamarelo.length))]);

 }
 function sorteioAmarelas(){
    setInterval(function(){cartaAmarela()},1000)
 }


  //INÍCIO DO SORTEIO CARTAS AZUIS

  
 var bazul = new Array()
 bazul [0] = "cartinhas/azul/1.png";
 bazul [1] = "cartinhas/azul/1 - copia.png";
 bazul [2] = "cartinhas/azul/2.png";
 bazul [3] = "cartinhas/azul/2 - copia.png";
 bazul [4] = "cartinhas/azul/3.png";
 bazul [5] = "cartinhas/azul/3 - copia.png";
 bazul [6] = "cartinhas/azul/4.png";
 bazul [7] = "cartinhas/azul/4 - copia.png";
 bazul [8] = "cartinhas/azul/5.png";
 bazul [9] = "cartinhas/azul/5 - copia.png";
 bazul [10] = "cartinhas/azul/6.png";
 bazul [11] = "cartinhas/azul/6 - copia.png";
 bazul [12] = "cartinhas/azul/7.png";
 bazul [13] = "cartinhas/azul/7 - copia.png";
 bazul [14] = "cartinhas/azul/8.png";
 bazul [15] = "cartinhas/azul/8 - copia.png";
 bazul [16] = "cartinhas/azul/9.png";
 bazul [17] = "cartinhas/azul/9 - copia.png";
 
 
 
 
 var altBaralhoAzul = new Array();
 altBaralhoAzul  [0] = "bazul1";
 altBaralhoAzul  [1] = "bazul2";
 altBaralhoAzul  [2] = "bazul3";
 altBaralhoAzul  [3] = "bazul4";
 altBaralhoAzul  [4] = "bazul5";
 altBaralhoAzul  [5] = "bazul6";
 altBaralhoAzul  [6] = "bazul7";
 altBaralhoAzul  [7] = "bazul8";
 altBaralhoAzul  [8] = "bazul9";
 altBaralhoAzul  [9] = "bazul10";
 altBaralhoAzul  [10] = "bazul11";
 altBaralhoAzul  [11] = "bazul12";
 altBaralhoAzul  [12] = "bazul13";
 altBaralhoAzul  [13] = "bazul14";
 altBaralhoAzul  [14] = "bazul15";
 altBaralhoAzul  [15] = "bazul16";
 altBaralhoAzul  [16] = "bazul17";
 altBaralhoAzul  [17] = "bazul18";
 
 
 
 
 
  function cartaAzul(){ // aqui, a função precisa ter o mesmo nome da ação onClick do HTML
      
     document.getElementById('sorteioAzuis').setAttribute('src', bazul[Math.floor((Math.random() * bazul.length))]);
     document.getElementById('sorteioAzuis').setAttribute('alt', altBaralhoAzul[Math.floor((Math.random() * bazul.length))]);
 
  }
  function sorteioAzuis(){
     setInterval(function(){cartaAzul()},1000)
  }


  //INÍCIO DO SORTEIO CARTAS VERDES

var bverde = new Array()
bverde [0] = "cartinhas/verde/1.png";
bverde [1] = "cartinhas/verde/1 - copia.png";
bverde [2] = "cartinhas/verde/2.png";
bverde [3] = "cartinhas/verde/2 - copia.png";
bverde [4] = "cartinhas/verde/3.png";
bverde [5] = "cartinhas/verde/3 - copia.png";
bverde [6] = "cartinhas/verde/4.png";
bverde [7] = "cartinhas/verde/4 - copia.png";
bverde [8] = "cartinhas/verde/5.png";
bverde [9] = "cartinhas/verde/5 - copia.png";
bverde [10] = "cartinhas/verde/6.png";
bverde [11] = "cartinhas/verde/6 - copia.png";




var altBaralhoVerde = new Array();
altBaralhoVerde [0] = "bverde1";
altBaralhoVerde [1] = "bverde2";
altBaralhoVerde [2] = "bverde3";
altBaralhoVerde [3] = "bverde4";
altBaralhoVerde [4] = "bverde5";
altBaralhoVerde [5] = "bverde6";
altBaralhoVerde [6] = "bverde7";
altBaralhoVerde [7] = "bverde8";
altBaralhoVerde [8] = "bverde9";
altBaralhoVerde [9] = "bverde10";
altBaralhoVerde [10] ="bverde11";
altBaralhoVerde [11] ="bverde12";




 function cartaVerde(){ // aqui, a função precisa ter o mesmo nome da ação onClick do HTML
     
    document.getElementById('sorteioVerdes').setAttribute('src', bverde[Math.floor((Math.random() * bverde.length))]);
    document.getElementById('sorteioVerdes').setAttribute('alt', altBaralhoVerde[Math.floor((Math.random() * bverde.length))]);

 }
 function sorteioVerdes(){
    setInterval(function(){cartaVerde()},1000)
 }


  //INÍCIO DO SORTEIO CARTAS VERMELHAS

  var bvermelha = new Array()
bvermelha [0] = "cartinhas/vermelha/1.png";
bvermelha [1] = "cartinhas/vermelha/1 - copia.png";
bvermelha [2] = "cartinhas/vermelha/2.png";
bvermelha [3] = "cartinhas/vermelha/2 - copia.png";
bvermelha [4] = "cartinhas/vermelha/3.png";
bvermelha [5] = "cartinhas/vermelha/3 - copia.png";
bvermelha [6] = "cartinhas/vermelha/4.png";
bvermelha [7] = "cartinhas/vermelha/4 - copia.png";
bvermelha [8] = "cartinhas/vermelha/5.png";
bvermelha [9] = "cartinhas/vermelha/5 - copia.png";
bvermelha [10] = "cartinhas/vermelha/6.png";
bvermelha [11] = "cartinhas/vermelha/6 - copia.png";




var altBaralhoVermelho = new Array();
altBaralhoVermelho [0] = "bvermelho1";
altBaralhoVermelho [1] = "bvermelho2";
altBaralhoVermelho [2] = "bvermelho3";
altBaralhoVermelho [3] = "bvermelho4";
altBaralhoVermelho [4] = "bvermelho5";
altBaralhoVermelho [5] = "bvermelho6";
altBaralhoVermelho [6] = "bvermelho7";
altBaralhoVermelho [7] = "bvermelho8";
altBaralhoVermelho [8] = "bvermelho9";
altBaralhoVermelho [9] = "bvermelho10";
altBaralhoVermelho [10] ="bvermelho11";
altBaralhoVermelho [11] ="bvermelho12";




 function cartaVermelha(){ // aqui, a função precisa ter o mesmo nome da ação onClick do HTML
     
    document.getElementById('sorteioVermelhas').setAttribute('src', bvermelha[Math.floor((Math.random() * bvermelha.length))]);
    document.getElementById('sorteioVermelhas').setAttribute('alt', altBaralhoVermelho[Math.floor((Math.random() * bvermelha.length))]);

 }
 function sorteioVerdes(){
    setInterval(function(){cartaVermelha()},1000)
 }
