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

const play = document.getElementById("Gronk");

let pockets = [];

let pants = true;

let statue = "unbroken";
// room class
class Room {
    constructor(gronkEyes){
        this.gronkEyes = gronkEyes;
    }
    
};
//function to append new room description to playSpace

function gronkSpeaks(gronkEyes){
    let speak = document.createElement("span");
    let pause = document.createElement("br");
    let pause2 = document.createElement("br");

    speak.innerText = (gronkEyes);
    play.appendChild(speak);
    play.appendChild(pause);
    play.appendChild(pause2);
};

//first room object
const room1 = new Room("Hole is big and deep and smooth, Gronk can't climb out of hole. There is large statue in hole, holding shiny key, other hand held out to take, like Gork. there is door away from Gronk in wall.")
