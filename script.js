var btn = document.querySelector('.button');
var inputText = document.querySelector('.input');
var outputText = document.querySelector('.output');
const url = "https://api.funtranslations.com/translate/minion.json";

var urlGenerator = (text) => {
  let outputUrl = `${url}?text=${text}`;
  return outputUrl;
};

function showOutput() {
  fetch(urlGenerator(inputText.value))
    .then((response) => response.json())
    .then(json => outputText.innerText = `${json.contents.translated}`);
}

