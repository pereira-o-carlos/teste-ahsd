window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const score = parseInt(urlParams.get('accumulated-score'));
    var showResult;

    scoreResultado = ((score - 84) / (588-84)) * 10;

    switch (true) {

        case (scoreResultado > 0 && scoreResultado <= 4) :
            rshowResult = "BAIXA indicação para a investigação de AH/SD";
            break;
        case (scoreResultado > 4 && scoreResultado <= 7) :
            showResult = "MÉDIA indicação para a investigação de AH/SD";
            break;
        case (scoreResultado > 7) :
            showResult = "ALTA indicação para a investigação de AH/SD";
            break;
        default :
            showResult = "Resultado Indefinido";
        }
        document.getElementById('Resultado').value = showResult;
}
function navigateHome() {
    window.location.href = "index.html";
}
