var btn = document.querySelector("#button");
var inputText = document.querySelector("#textarea-input");
var outputText = document.querySelector("#output-text");
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

// outputText.innerText = urlGenerator("I am Mukul")
