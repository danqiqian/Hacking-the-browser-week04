console.log('Content Script via Browser Action background page, version 1');

//chrome.browserAction.onClicked.addListener(function() {
  //console.log('Clicked the browser action!');
    
    //chrome.tabs.executeScript({file: 'jquery.js'}, function() {

    //console.log('background script injected jquery');
    //chrome.tabs.executeScript({file: 'content_script.js'}, function() {

    //console.log('background script injected content_script');
    //});
  //});
    
   //chrome.tabs.insertCSS({file: 'mystyles.css'}, function() {
   //console.log('background script inserted mystyles.css');
  //});
//});


chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
console.log("ext icon is clicked");
let msg={
txt:"hello"
}
 chrome.tabs.sendMessage(tab.id,msg);
}