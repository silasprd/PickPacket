var player = new Object();

//Variaveis de coordenada player/pack
player.eixoX = 0;
player.eixoY = 0;
player.pointX = 0;
player.pointY = 0;
var x = 0;
var y = 100;
var eixoX;
var eixoY;

//Variaveis da tela
var positWidth = window.innerWidth;
var positHeight = window.innerHeight;
var pixels = "px";

var arrayPack = [];
var pontos = 0;

window.addEventListener("keydown", mover, false);

// Carregar os pacotes
function summonPack() {
  for (var aux = 0; aux < 23; aux++) {
    var newPack = document.createElement("div");
    newPack.setAttribute("id", "pack" + aux);
    newPack.setAttribute("class", "pack");

    var show = document.getElementById("show");
    show.appendChild(newPack);
    pack = "pack" + aux;

    eixoX = Math.floor(Math.random() * positWidth);
    eixoX = eixoX / 50;
    eixoX = parseInt(eixoX) * 50;

    eixoY = Math.floor(Math.random() * positHeight);
    eixoY = eixoY / 50;
    eixoY = parseInt(eixoY) * 50;

    document.getElementById(pack).style.left = eixoX + pixels;
    document.getElementById(pack).style.top = eixoY + pixels;

    var packSummon = new Object();
    packSummon.eixoX = eixoX;
    packSummon.eixoY = eixoY;
    packSummon.take = false;
    packSummon.id = "pack" + aux;

    arrayPack.push(packSummon);
  }
}

// Carregar os pacotes B
function summonPackB() {
  for (var aux = 0; aux < 10; aux++) {
    var newPack = document.createElement("div");
    newPack.setAttribute("id", "packB" + aux);
    newPack.setAttribute("class", "packB");

    var show = document.getElementById("show");
    show.appendChild(newPack);
    packB = "packB" + aux;

    var pointX = Math.floor(Math.random() * positWidth);
    pointX = pointX / 50;
    pointX = parseInt(pointX) * 50;

    var pointY = Math.floor(Math.random() * positHeight);
    pointY = pointY / 50;
    pointY = parseInt(pointY) * 50;

    document.getElementById(packB).style.left = pointX + pixels;
    document.getElementById(packB).style.top = pointY + pixels;

    var packSummon = new Object();
    packSummon.pointX = pointX;
    packSummon.pointY = pointY;
    packSummon.take = false;
    packSummon.id = "packB" + aux;

    arrayPack.push(packSummon);
  }
}

function mover(e) {
  switch (e.keyCode) {
    //Mover player para direita(d)
    case 68:
      x += 50;
      player.eixoX = x;
      document.getElementById("player").style.left = player.eixoX + "px";
      break;

    //Mover player para esquerda(a)
    case 65:
      x -= 50;
      player.eixoX = x;
      document.getElementById("player").style.left = player.eixoX + "px";
      break;

    //Mover player para cima(w)
    case 87:
      y -= 50;
      player.eixoY = y;
      document.getElementById("player").style.top = player.eixoY + "px";
      break;

    //Mover player para baixo(s)
    case 83:
      y += 50;
      player.eixoY = y;
      document.getElementById("player").style.top = player.eixoY + "px";
      break;

    default:
      break;
  }
  takePack(player.eixoX, player.eixoY);
  takePackB(player.eixoX, player.eixoY);
}

//Capturar pacotes
function takePack(eixoX, eixoY) {
  for (let aux = 0; aux < arrayPack.length; aux++) {
    var pointPackX = arrayPack[aux].eixoX;
    var pointPackY = arrayPack[aux].eixoY;
    var idPack = arrayPack[aux].id;
    if (eixoX == pointPackX && eixoY == pointPackY) {
      if (arrayPack[aux].take == false) {
        document.getElementById(idPack).style.display = "none";
        arrayPack[aux].take = true;
        pontos += 1;
        showPack();
      }
    }
  }
}

//Capturar pacotes B
function takePackB(pointX, pointY) {
  for (let aux = 0; aux < arrayPack.length; aux++) {
    var pointPackX = arrayPack[aux].pointX;
    var pointPackY = arrayPack[aux].pointY;
    var idPack = arrayPack[aux].id;
    if (pointX == pointPackX && pointY == pointPackY) {
      if (arrayPack[aux].take == false) {
        document.getElementById(idPack).style.display = "none";
        arrayPack[aux].take = true;
        pontos -= 1;
        showPack();
      }
    }
  }
}

//Exibir pontua????o
function showPack() {
  document.getElementById("points").innerHTML = "      " + pontos;
  if (pontos == 20) {
    alert(
      "51 ?? PINGA!!!! Voc?? capturou todos os mundiais do palmeiras, o Porco est?? feliz!!! Clique em atualizar para jogar novamente."
    );
  }
}

//Exibir informa????es do jogo
function infoGame() {
  alert(
    "Ajude nosso amigo porco palmeirense a encontrar seus trof??us. Objetivo do jogo: Capturar todas as 25 ta??as do mundial do palmeiras (Garrafas de 51). Aten????o!! Ao capturar as ta??as verdadeiras voc?? perde 1 ponto."
  );
}
