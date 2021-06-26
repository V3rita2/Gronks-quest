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

let room = 0;
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
const room0 = {
    gronkEyes: ("Hole is big and deep and smooth, Gronk can't climb out. Big statue near Gronk holding shiny key, other hand look like Gork when taking something from Gronk. Door away from Gronk on wall."),

    POI: ("statue", "door"),



};

//what makes the game go
$("#inputLine").submit(gronkDo);

//Gronk's brain
function gronkDo(e) {
    //checks if player is picking something up, and puts it in their inventory
    if( $("input").first().val() === "pick") {
        pockets.push($("input").last().val());
    }
    else if($("input").first().val() === "go") {
        switch (room) {
            case 0:
                if ($("input").last().val() !== "door" || $("input").last().val() !== "statue") {
                    //DO THIS NEXT IDIOT
                }
        }
            
        
    }
}