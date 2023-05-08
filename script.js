var btn = document.querySelector("#button");
var inputText = Number(document.querySelector("#textarea-input")); 
var outputText = document.querySelector("#output-text");

function isLeepYear(){
    var showInputText = inputText.value;
    var output = showInputText * showInputText;

    outputText.innerText = output;
}