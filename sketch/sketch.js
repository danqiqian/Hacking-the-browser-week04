﻿  function setup(){
    noCanvas();
    let userinput=select('#userinput');
    userinput.input(changeText);

    function changeText(){
        //send a message to the content script
        let params={
            active:true,
            currentWindow:true
        }
        chrome.tabs.query(params,gotTabs);

        function gotTabs(tabs){
        console.log("got tabs");
        console.log(tabs);
        let message=userinput.value();
        let msg={
            txt:userinput.value()
            }
        chrome.tabs.sendMessage(tabs[0].id,msg);
        console.log("msg sent");
        }
    }
}