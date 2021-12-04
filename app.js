var serverURL = "https://api.funtranslations.com/translate/yoda.json"

var txtInput = document.querySelector('#txt-input')
//console.log(txtInput)

var btnTranslate = document.querySelector("#btn-translate")
//console.log(btnTranslate)
btnTranslate.addEventListener("click", clickHandler)

var divOutput = document.querySelector("#div-output")
//console.log(divOutput)

function getTranslationURL(text) {
    return serverURL + "?text=" + text;
}

function errorHandler(error) {
    console.log("error occured", error)
    alert("Something went wong with server! try again aftersometime.")
}

function clickHandler() {
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            divOutput.innerText = translatedText;
        })
        .catch(errorHandler)
}

