//função que remove um círculo da tela
function disappear(element) {
    element.style.display = "none";
};

//cria um círculo e adiciona à tela, esse círculo possui uma cor aleatória
function createCircle(){
    const randomColor = Math.floor(Math.random()*16777214 + 1).toString(16);
    var newCircle = document.createElement('div');
    newCircle.className = 'circle';
    newCircle.style.backgroundColor = '#' + randomColor;
    if(randomColor.length < 6){
        newCircle.style.backgroundColor = 'red';
    }
    document.body.appendChild(newCircle);
    newCircle.onclick = function() { return disappear(newCircle); };
}

//Cria uma quantidade aleatória de círculos e os adiciona à tela
function createCircles(){
    const nCircles = Math.floor(Math.random()*7 + 1);
    for(i = 0; i<nCircles; i++){
        createCircle();
    }
}

//Cria o botão que terá a função de adicionar círculos à tela
var button = document.createElement('button');
button.textContent = 'Adicionar Circulo';
button.onclick = createCircle;
document.body.appendChild(button);

//Adiciona um parágrafo para separar o botão dos círculos
document.body.append(document.createElement('p'));

//cria os círculos iniciais que serão exibidos
createCircles();