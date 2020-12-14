var lf = [5, 12, 10, 25, 5, 30, 2],
    respostasFacil = [lf[0]*lf[1], lf[2]*lf[3], (lf[4]*lf[5])+lf[6]]

var lm = [22, 12, 2, 45, 2, 6, 75, 5, 7],
    respostasMedio = [(lm[0]*lm[1])/lm[2], (lm[3]/lm[4])*lm[5], (lm[6]/lm[7])-lm[8]]

var ld = [7, 2, 5, 8, 4, 144, 3],
    respostasDificil = [(Math.pow(ld[0], ld[6]))+(ld[1]*ld[2]), (ld[3]*ld[2])-(Math.pow(ld[4], ld[6])), Math.sqrt(ld[5])-(ld[2]*ld[0])]

var x = 115, y = 100, opcao = 1, tela = 0, h = 14, v = 75, opcaoNivel = 4, number1 = 4, number2 = 50, time = 0, timeS = 0, rate = 25, question = 1, hmao = 35, result = 1, resultado = 0, ganhou = false;

let img, n1, n2, n3, textura1, mao, fim, perdeu, errou;

function preload() {
  img = loadImage('foto.png');
  n1 = loadImage('h.png');
  n2 = loadImage('h2.png');
  n3 = loadImage('h3.png');
  mao = loadImage('mao.png');
  textura1 = loadImage('textura.jpg');
  fim = loadImage('parabens.png');
  perdeu = loadImage('perdeu.png');
  errou = loadImage('errou.png');
}

function setup() {
  createCanvas(400, 400);
  frameRate(rate);
}

function draw() {  
  background(textura1);
 
  if(tela == 0) {
    menu();
  } else if(tela == 1) {
    jogar();
  } else if(tela == 2) {
    instrucoes();
  } else if(tela == 3) {
    creditos();
  } else if(tela == 4) {
    facil();
  } else if(tela == 5) {
    medio();
  } else if(tela == 6) {
    dificil();
  } else if(tela == 7) {
    gameOver();
  } else if(tela == 8) {
    congratulations();
  }
}

function menu() {  
  fill(51);
  stroke(220);
  rect(x, y, 170, 45);
 
  fill(255);
  noStroke();
  textSize(30);
  text('GÊNIO DA MATEMÁTICA', 25, 50);
 
  textSize(24);
  text('Jogar', 165, 130);
  text('Instruções', 145, 230);
  text('Créditos', 155, 330);
}

function jogar() {  
  text('Selecione a dificuldade:', 70, 50);
  noFill();
  stroke(220);
  rect(h, v, 110, 260);
 
  fill(255);
  noStroke();
 
  image(n1, 20, 80);
  text('Fácil', 45, 330);
 
  image(n2, 150, 80);
  text('Médio', 170, 330);
 
  image(n3, 280, 80);
  text('Difícil', 300, 330);
}

function facil() {  
  noStroke();
  fill(0, 255, 0);
  rect(0, 0, (400/rate)*timeS, 10);
 
  time += 1;
  timeS = parseInt (time/rate);
 
  if(timeS == rate) {
    tela = 7;
  }
 
  stroke(255, 219, 0);
  fill(20);
  rect(50, 125, 300, 100);
 
  image(mao, hmao, 280, 50, 50);
 
  for(let f = 0; f < 3; f++) {    
    textSize(40);
    noStroke();
    fill(255);
    text("Quanto é:", 120, 100);
    textSize(60);
 
    if(question == 1) {
      text(lf[0]+" x "+lf[1], 120, 195);
      stroke(255, 219, 0);
      fill(20);
      rect(20, 340, 80, 40);
      rect(162.5, 340, 80, 40);
      rect(300, 340, 80, 40);
   
      noStroke();
      fill(255);
      textSize(18);
      text(respostasFacil[0], 50, 367.5);
      text("600", 185, 367.5);
      text("54", 330, 367.5);
   
      if(resultado != 0) {
        if(resultado == 1) {
          question++;
          result = 1;
          resultado = 0;
          hmao = 35;
        } else {
          tela = 7;
        }
      }
    }
   
    if(question == 2) {
      text(lf[2]+" x "+lf[3], 100, 195);
      stroke(255, 219, 0);
      fill(20);
      rect(20, 340, 80, 40);
      rect(162.5, 340, 80, 40);
      rect(300, 340, 80, 40);
   
      noStroke();
      fill(255);
      textSize(18);
      text("255", 45, 367.5);
      text("275", 187.5, 367.5);
      text(respostasFacil[1], 325, 367.5);
   
      if(resultado != 0) {
        if(resultado == 3) {
          question++;
          result = 1;
          resultado = 0;
          hmao = 35;
        } else {
          tela = 7;
        }
      }  
    }
   
    if (question == 3) {
      text(lf[4]+" x "+lf[5]+" + "+lf[6], 65, 195);
      stroke(255, 219, 0);
      fill(20);
      rect(20, 340, 80, 40);
      rect(162.5, 340, 80, 40);
      rect(300, 340, 80, 40);
   
      noStroke();
      fill(255);
      textSize(18);
      text(respostasFacil[2], 45, 367.5);
      text("162", 187.5, 367.5);
      text("160", 325, 367.5);
   
      if(resultado != 0) {
        if(resultado == 1) {
          question++;
          result = 1;
          resultado = 0;
          hmao = 35;
          ganhou = true;
        } else {
          tela = 7;
        }
      }
    }
 
    textSize(18);
    noStroke();
    fill(255);
    text("Questão: " + question + "/3", 20, 40);
  }
 
  if(ganhou) {
    tela = 8;
  }
}

function medio() {
  noStroke();
  fill(0, 255, 0);
  rect(0, 0, (400/rate)*timeS, 10);
 
  time += 1;
  timeS = parseInt (time/rate);
 
  if(timeS == rate) {
    tela = 7;
  }
 
  stroke(255, 219, 0);
  fill(20);
  rect(50, 125, 300, 100);
 
  image(mao, hmao, 280, 50, 50);
 
  for(let f = 0; f < 3; f++) {    
    textSize(40);
    noStroke();
    fill(255);
    text("Quanto é:", 120, 100);
    textSize(60);
 
    if(question == 1) {
      text(lm[0]+" x "+lm[1]+" / "+lm[2], 60, 195);
      stroke(255, 219, 0);
      fill(20);
      rect(20, 340, 80, 40);
      rect(162.5, 340, 80, 40);
      rect(300, 340, 80, 40);
   
      noStroke();
      fill(255);
      textSize(18);
      text("122", 45, 367.5);
      text(respostasMedio[0], 187.5, 367.5);
      text("152", 325, 367.5);
   
      if(resultado != 0) {
        if(resultado == 2) {
          question++;
          result = 1;
          resultado = 0;
          hmao = 35;
        } else {
          tela = 7;
        }
      }
    }
   
    if(question == 2) {
      text(lm[3]+" / "+lm[4]+" x "+lm[5], 75, 195);
      stroke(255, 219, 0);
      fill(20);
      rect(20, 340, 80, 40);
      rect(162.5, 340, 80, 40);
      rect(300, 340, 80, 40);
   
      noStroke();
      fill(255);
      textSize(18);
      text("130", 45, 367.5);
      text(respostasMedio[1], 187.5, 367.5);
      text("155", 325, 367.5);
   
      if(resultado != 0) {
        if(resultado == 2) {
          question++;
          result = 1;
          resultado = 0;
          hmao = 35;
        } else {
          tela = 7;
        }
      }  
    }
   
    if (question == 3) {
      text(lm[6]+" / "+lm[7]+" - "+lm[8], 80, 195);
      stroke(255, 219, 0);
      fill(20);
      rect(20, 340, 80, 40);
      rect(162.5, 340, 80, 40);
      rect(300, 340, 80, 40);
   
      noStroke();
      fill(255);
      textSize(18);
      text(respostasMedio[2], 52.5, 367.5);
      text("9", 197.5, 367.5);
      text("7", 335, 367.5);
   
      if(resultado != 0) {
        if(resultado == 1) {
          question++;
          result = 1;
          resultado = 0;
          hmao = 35;
          ganhou = true;
        } else {
          tela = 7;
        }
      }
    }
 
    textSize(18);
    noStroke();
    fill(255);
    text("Questão: " + question + "/3", 20, 40);
  }
 
  if(ganhou) {
    tela = 8;
  }
}

function dificil() {
  noStroke();
  fill(0, 255, 0);
  rect(0, 0, (400/rate)*timeS, 10);
 
  time += 1;
  timeS = parseInt (time/rate);
 
  if(timeS == rate) {
    tela = 7;
  }
 
  stroke(255, 219, 0);
  fill(20);
  rect(50, 125, 300, 100);
 
  image(mao, hmao, 280, 50, 50);
 
  for(let f = 0; f < 3; f++) {    
    textSize(40);
    noStroke();
    fill(255);
    text("Quanto é:", 120, 100);
    textSize(60);
 
    if(question == 1) {
      text(ld[0]+"^"+ld[6]+" + "+ld[1]+" x "+ld[2], 52, 195);
      stroke(255, 219, 0);
      fill(20);
      rect(20, 340, 80, 40);
      rect(162.5, 340, 80, 40);
      rect(300, 340, 80, 40);
   
      noStroke();
      fill(255);
      textSize(18);
      text("351", 45, 367.5);
      text("352", 187.5, 367.5);
      text(respostasDificil[0], 325, 367.5);
   
      if(resultado != 0) {
        if(resultado == 3) {
          question++;
          result = 1;
          resultado = 0;
          hmao = 35;
        } else {
          tela = 7;
        }
      }
    }
   
    if(question == 2) {
      text(ld[3]+" x "+ld[2]+" - "+ld[4]+"^"+ld[6], 60, 195);
      stroke(255, 219, 0);
      fill(20);
      rect(20, 340, 80, 40);
      rect(162.5, 340, 80, 40);
      rect(300, 340, 80, 40);
   
      noStroke();
      fill(255);
      textSize(18);
      text("-32", 45, 367.5);
      text("-12", 187.5, 367.5);
      text(respostasDificil[1], 325, 367.5);
   
      if(resultado != 0) {
        if(resultado == 3) {
          question++;
          result = 1;
          resultado = 0;
          hmao = 35;
        } else {
          tela = 7;
        }
      }  
    }
   
    if (question == 3) {
      textSize(54);
      text("√"+ld[5]+" - "+ld[2]+" x "+ld[0], 58, 195);
      stroke(255, 219, 0);
      fill(20);
      rect(20, 340, 80, 40);
      rect(162.5, 340, 80, 40);
      rect(300, 340, 80, 40);
   
      noStroke();
      fill(255);
      textSize(18);
      text(respostasDificil[2], 45, 367.5);
      text("-27", 187.5, 367.5);
      text("-21", 325, 367.5);
   
      if(resultado != 0) {
        if(resultado == 1) {
          question++;
          result = 1;
          resultado = 0;
          hmao = 35;
          ganhou = true;
        } else {
          tela = 7;
        }
      }
    }
 
    textSize(18);
    noStroke();
    fill(255);
    text("Questão: " + question + "/3", 20, 40);
  }
 
  if(ganhou) {
    tela = 8;
  }
}

function gameOver() {
  background(75, 0, 156);
  textSize(60);
  fill(255);
  noStroke();
  text("Errooou!", 85, 125);
  image(perdeu, 80, 270, 250, 148);
  //image(errou, 110, 180, 175, 175);
}

function congratulations() {
  background(71, 184, 185);
  textSize(60);
  fill(0);
  noStroke();
  text("Sabe tudo!", 50, 125);
  image(fim, 110, 180, 175, 175);
}

function instrucoes() {
  textSize(20);
  text('Nível: Ensino médio', 30, 50)
  text('Matéria: Matemática', 30, 100)
  text('O jogo é composto por três níveis', 30, 150)
  text('de dificuldade. O objetivo é que', 30, 180)
  text('os usuários respondam corretamente', 30, 210)
  text('os cálculos matemáticos apresentados', 30, 240)
  text('na tela. As questões se tornam mais', 30, 270)
  text('complicadas dependendo do nível', 30, 300)
  text('escolhido pelo jogador.', 30, 330)
}


function creditos() {  
  image(img, 140, 100);
  textSize(24);
  text('Luanderson: programador', 60, 250);
}

function keyPressed() {
  if(key == "ArrowRight" && (tela == 4 || tela == 5 || tela == 6) && hmao < 315) {
    hmao += 140;
    result++;
  }
  if(key == "ArrowLeft" && (tela == 4 || tela == 5 || tela == 6) && hmao > 35) {
    hmao -= 140;
    result--;
  }
 
  if(key == "Enter" && (tela == 4 || tela == 5 || tela == 6)) {
    resultado = result;
  }
 
  if(key == "ArrowUp" && y > 100) {
    y -= 100;
    opcao--;
  }
  if(key == "ArrowDown" && y < 300) {
    y += 100;
    opcao++;
  }
  if(key == "ArrowRight" && tela == 1 && h < 274) {
    h += 130;
    opcaoNivel++;
  }
  if(key == "ArrowLeft" && tela == 1 && h > 14) {
    h -= 130;
    opcaoNivel--;
  }
 
  if(key == "Enter" && tela == 1) {
    tela = opcaoNivel;
  }
 
  if(key == "Enter" && tela == 0) {
    tela = opcao;
  }
 
  if(key == "Escape") {
    tela = 0;
    question = 1;
    result = 1;
    resultado = 0;
    hmao = 35;
    ganhou = false;
    time = 0;
    timeS = 0;
  }
} 