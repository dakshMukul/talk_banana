var btn = document.querySelector('.btn');
var inputText = document.querySelector('.input-textarea');
var outputText = document.querySelector('.output-textarea');
const url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var urlGenerator = (text) => {
  let outputUrl = `${url}?text=${text}`;
  return outputUrl;
};

function showOutput() {
  fetch(urlGenerator(inputText.value))
    .then((response) => response.json())
    .then(json => outputText.innerText = `${json.contents.translated}`);
}


