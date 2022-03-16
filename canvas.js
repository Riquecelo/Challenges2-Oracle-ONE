var tela=document.querySelector('canvas');
var pincel=tela.getContext('2d');
pincel.lineWidth=5;
pincel.font="39px Arial";

function desenhaParabens(){
	pincel.fillText("Você venceu",670,60);
	pincel.fillText("Parabéns!",670,120);
}

function desenhaGameOver(){
	pincel.fillText("Game Over! A palavra era:",670,60);
	pincel.fillText(palavraSecreta,670,120);
}

function desenhaLetraErrada(){
	for(var i=0;i<6;i++){
		if(tentativas[i]==event.key){
			pincel.fillText(event.key,670+(50*i),220);
			erros++;
		}
	}
}

function desenhaLetraCorreta(){
	for(var i=0;i<palavraSecreta.length;i++){
		if(palavraSecreta[i]==event.key){
			pincel.fillText(event.key,235+(69*i),455);
			acertos++;
		}
	}
}

function desenhaTracos(){
	for(var i=0;i<palavraSecreta.length;i++){
		pincel.moveTo(220+(70*i),460);
		pincel.lineTo(270+(70*i),460);
		pincel.stroke();
	}
}

function desenhaForca(){
	pincel.beginPath();
	pincel.moveTo(20,460);
	pincel.lineTo(95,440);
	pincel.lineTo(170,460);
	pincel.closePath();
	pincel.stroke();

	pincel.beginPath();
	pincel.moveTo(95,440);
	pincel.lineTo(95,10);
	pincel.stroke();

	pincel.beginPath();
	pincel.moveTo(92,10);
	pincel.lineTo(400,10);
	pincel.stroke();

	pincel.beginPath();
	pincel.moveTo(400,7);
	pincel.lineTo(400,50);
	pincel.stroke();
}

function desenhaCabeca(){
	pincel.beginPath();
	pincel.arc(400,87,35,0,2*Math.PI);
	pincel.stroke();
}

function desenhaCorpo(){
	pincel.beginPath();
	pincel.moveTo(400,124);
	pincel.lineTo(400,280);
	pincel.stroke();
}

function desenhaPernaDireita(){
	pincel.beginPath();
	pincel.moveTo(400,279);
	pincel.lineTo(460,360);
	pincel.stroke();
}

function desenhaPernaEsquerda(){
	pincel.beginPath();
	pincel.moveTo(400,280);
	pincel.lineTo(340,360);
	pincel.stroke();
}

function desenhaBracoDireito(){
	pincel.beginPath();
	pincel.moveTo(400,180);
	pincel.lineTo(470,120);
	pincel.stroke();
}

function desenhaBracoEsquerdo(){
	pincel.beginPath();
	pincel.moveTo(400,180);
	pincel.lineTo(330,120);
	pincel.stroke();
}

function desenhaBoneco(erros){
	switch(erros){
		case 1: desenhaCabeca();
		break;
		case 2: desenhaCorpo();
		break;
		case 3: desenhaPernaDireita();
		break;
		case 4: desenhaPernaEsquerda();
		break;
		case 5: desenhaBracoDireito();
		break;
		case 6: desenhaBracoEsquerdo();
		break;
	}
}
