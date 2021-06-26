/* 1: script to append new spans to playspace div
1A: description oif what player does
1B: exact words player typed
1C: descrption of new room when reached
1D: profit???
2: functions to handle specific actions; ex. "pick up", "walk to" etc.
3: object or function for each room
4: minimum three rooms and puzzles
5: win state and lose state
*/
// global variables

let play = document.getElementById("Gronk");
//function to append new span to playSpace

function gronkSpeaks(gronkEyes){
    let speak = document.createElement("span");

    speak.innerText(gronkEyes);
    document.play.appendChild(speak);
};