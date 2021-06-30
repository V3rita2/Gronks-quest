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

let statue = true;

let room = 0;

const description = {
    statue: ("statue made of stone. Holding shiny key in one hand. Other hand look like when Gork take thing from Gronk"),
    door: ("door is big and heavy. has hole in door near handle.")
};

const use = {
    statue: {
        rock: ("Gronk hit statue hand with rock, hand break. shiny key fall on ground."),
        pants: ("Gronk put pants on statue hand, hand move down. other hand open, shiny key fall on ground.")
    },
    door: {
        rock: ("Gronk hit door with rock, make loud noise. door big and stronger than Gronk, like Gork."),
        pants: ("Gronk caress door with pants, get splinter."),
        key: ("Gronk put key in hole, makes clunk noise, door swing open"),

    }

};
//work around for the form reloading on submit
const input = document.getElementById("inputLine");

function noReload(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        document.getElementById("hatedOne").click();
    };
};

input.addEventListener("keydown", noReload);
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

//function to tell player what they entered doesn't work
function gronkConfuse(command) {
    let speak = document.createElement("span");
    let pause = document.createElement("br");
    let pause2 = document.createElement("br");

    speak.innerText = ("Gronk not know what " + command + " mean. Gronk simple, use simple words." );
    play.appendChild(speak);
    play.appendChild(pause);
    play.appendChild(pause2);
};

// function to tell the player they picked something up
function gainItem(item) {
    let speak = document.createElement("span");
    let pause = document.createElement("br");
    let pause2 = document.createElement("br");
    
    speak.innerText = ("gronk put " + item + " in pocket.");

    play.appendChild(speak);
    play.appendChild(pause);
    play.appendChild(pause2);
    pockets.push(item);
    return pockets;
};

//function to use a tool
function gronkUse(tool, item) {
    let speak = document.createElement("span");
    let pause = document.createElement("br");
    let pause2 = document.createElement("br");

    speak.innerText = (use[item][tool]);

    play.appendChild(speak);
    play.appendChild(pause);
    play.appendChild(pause2);
    pockets.splice(pockets.indexOf(item), 1);
    
    if (tool === "pants") {
        pants = false;
        return pants;
    }
    else if (tool === "rock" && item === "statue") {
        statue = false;
        return statue;
    }
    else if (tool === "key" && item === "door") {
        room0.doorOpen = true;
        return room0.doorOpen;
    }
    return pockets;
};

//function for when player tries to use tool they dont have
function noTool(tool) {
    let speak = document.createElement("span");
    let pause = document.createElement("br");
    let pause2 = document.createElement("br");

    speak.innerText = ("Gronk not have " + tool);

    play.appendChild(speak);
    play.appendChild(pause);
    play.appendChild(pause2);

};

//function to limit what player can pick up
function notHere(item) {
    let speak = document.createElement("span");
    let pause = document.createElement("br");
    let pause2 = document.createElement("br");

    speak.innerText = ("Gronk not see " + item + " anywhere.");

    
    play.appendChild(speak);
    play.appendChild(pause);
    play.appendChild(pause2);
};

//function to explain the game
function howToPlay() {
    let speak = document.createElement("span");
    let pause = document.createElement("br");
    let pause2 = document.createElement("br");

    speak.innerText = ("Gronk isn't very smart, so he only understands very specific phrases, like 'pick up rock' or 'go to door' try and keep your directions to him short and simple, or he will get confused.To start game, type 'play'.");

    play.appendChild(speak);
    play.appendChild(pause);
    play.appendChild(pause2);
}

//function to display credits
function credits() {
    let speak = document.createElement("span");
    let pause = document.createElement("br");
    let pause2 = document.createElement("br");

    speak.innerText = ("QA consultants: Scubatapir, Jerome Chandler. QA testers: Space, Sage, Vanitas. Puzzle consultants: D&D 5e Dungeon Master's guide, Nico, The 5th Element.");

    play.appendChild(speak);
    play.appendChild(pause);
    play.appendChild(pause2);
};
rooms
const room0 = {
    gronkEyes: ("Hole is big and deep and smooth, Gronk can't climb out. Big statue near Gronk with shiny hand. Door away from Gronk on wall."),

    POI: ("statue", "door"),

    doorOpen:  false,



};

const room1 = {
    gronkEyes: ("Gronk open door, see room .Room dark and cold. Has small pointy stone on table in middle, with words on it. Pig in room asleep. Big metal rock cover exit, Gronk see light on other side."),

    POI: ("pig", "rock", "table"),

    doorOpen: false,

};

//what makes the game go

//Gronk's brain

function gronkDo() {
    let stringCommand = $("#command").val();
    let command = stringCommand.split(' ');
    let declaration = command[0];
    let itemNum = command.length - 1;
    let item = command[itemNum];
    let tool = command[1];

    // checks if player is picking something up, and puts it in their inventory
    if( declaration === "pick") {
        switch (room) {
            case 0:
                if (item !== "rock" && item !== "pants" && statue === true){
                    notHere(item);
                }
                else if (item === "rock" || item === "pants") {
                    gainItem(item);
                }
                else if (item === "key" && statue === false) {
                    gainItem(item);
                };
                break;
            case 1:
        };
       
    }
    //checks if player wants to go somewhere
    else if(declaration === "go") {
        switch (room) {
            case 0:
                if (item !== "door" && item !== "statue") {
                    gronkConfuse(command);
                }
                else if (item === "door" && room0.doorOpen === false) {
                    gronkDescribes("door");
                }
                else if (item === "statue") {
                    gronkDescribes("statue");
                }
                else if (item === "door" && room0.doorOpen === true) {
                    gronkSpeaks(room1.gronkEyes);
                    room += 1;
                    return room;
                }
                
                break;
            case 1:
        }
            
        
    }
    //if the player wants to use something in their inventory
    else if (declaration === "use") {
        // makes sure the player has the tool they are using
        if (pockets.indexOf(tool) >=0 ){
            console.log(tool, item);
            switch (room) {
                case 0:
                    //checks that the tool is one that can help solve the room puzzle
                    if(tool !== "key" && tool !== "rock" && tool !== "pants") {
                        gronkConfuse(command);
                    }
                    else {
                        //checks which item the player is targeting
                        switch (item) {
                            case "statue":
                                if(tool === "rock") {
                                    gronkUse(tool, item);
                                   
                                }
                                else if (tool === "pants") {
                                    gronkUse(tool, item);
                                   
                                }
                                else if (tool === "key") {
                                    gronkConfuse(command);
                                };
                                break;
                            case "door":
                                if (tool === "rock") {
                                    gronkUse(tool, item);
                                }
                                else if (tool === "pants") {
                                    gronkUse(tool, item);
                                }
                                else if (tool === "key") {
                                    gronkUse(tool, item);
                                };
                                break;
                        };
                    }
                    
            }
        }
        //tells player they don't have the item they want to use
        else {
            noTool(tool);
        }
        

    }
    else if (declaration === "play") {
        gronkSpeaks(room0.gronkEyes);
    }

}
$("#hatedOne").on("click", gronkDo);
$(".tutorial").on("click", howToPlay);
$(".credits").on("click", credits);