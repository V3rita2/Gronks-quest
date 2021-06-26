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

const description = {
    statue: ("statue made of stone. Holding shiny key in one hand. Other hand look like when Gork take thing from Gronk"),
    door: ("door is big and heavy. has hole in door near handle.")
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
//function to append description of important objects in the room
function gronkDescribes(item) {
    let speak = document.createElement("span");
    let pause = document.createElement("br");
    let pause2 = document.createElement("br");
    let words = (description[item]);
    
    
    speak.innerText = (words);
    play.appendChild(speak);
    play.appendChild(pause);
    play.appendChild(pause2);
};
//first room object
const room0 = {
    gronkEyes: ("Hole is big and deep and smooth, Gronk can't climb out. Big statue near Gronk with shiny hand. Door away from Gronk on wall."),

    POI: ("statue", "door"),



};

//what makes the game go
$("#inputLine").submit(gronkDo);

//Gronk's brain
function gronkDo(e) {
    let declaration = $("input").first().val();
    let item = $("input").last().val();
    //checks if player is picking something up, and puts it in their inventory
    if( declaration === "pick") {
        pockets.push(item);
    }
    else if(declaration === "go") {
        switch (room) {
            case 0:
                if (item !== "door" || item !== "statue") {
                    //DO THIS NEXT
                }
        }
            
        
    }
}