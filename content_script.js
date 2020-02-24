// This script needs jQuery present to run,
// so the background script must inject jQuery *before* it
// injects this one.

console.log('Hello, world! (from a content script) (version: 1)');


chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message,sender,sendResponce) {
    console.log("content script got message");
    console.log(message);
        let elts = document.getElementsByTagName('p');
        for(var i=0;i<elts.length;i++){
           elts[i].innerHTML= message.txt;
        }
    

}