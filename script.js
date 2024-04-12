window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
};

function navigateBack() {
    // Aqui você pode adicionar lógica para voltar para a página anterior
    // Pode precisar ajustar de acordo com a estrutura do seu questionário
    window.history.back();
}

function navigateForward() {
    const urlParams = new URLSearchParams(window.location.search);
    const score = parseInt(urlParams.get('accumulated-score'));
    const page  = parseInt(urlParams.get('current-page'));
    
    document.getElementById('score').textContent = score;
    document.getElementById('current-page').textContent = page;
    // ---
    const currentScore = parseInt(document.getElementById('score').textContent);
    const answerValue = parseInt(document.getElementById('answer').value);
    const questionType = document.getElementById('question-type').value;
    var nextScore = " ";
    if (questionType == "Negativa") {
        nextScore = currentScore + (8 - answerValue);
    } else {
        nextScore = currentScore + answerValue;
    }
    
    const nextPage = page + 1;
    
    // Atualize a linha abaixo com o caminho correto para sua próxima pergunta
    const url= `pergunta-${nextPage}.html?accumulated-score=${nextScore}&current-page=${nextPage}`;
    

    window.location.href = url;
}
function showResult() {
    const urlParams = new URLSearchParams(window.location.search);
    const score = parseInt(urlParams.get('accumulated-score'));
    var showResult;

    switch (true) {

        case (score > 0 && score <= 4) :
            rshowResult = "BAIXA indicação para a investigação de AH/SD";
        case (score > 4 && score <= 7) :
            showResult = "MÉDIA indicação para a investigação de AH/SD";
        case (score > 7) :
            showResult = "ALTA indicação para a investigação de AH/SD";
        default :
            showResult = "Resultado Indefinido";
        }

        document.getElementById('resultadoCalculo').textContent = showResult;

}
