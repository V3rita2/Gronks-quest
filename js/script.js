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

let gronk =true;

const description = {
    statue: ("statue made of stone. Holding shiny key in one hand. Other hand look like when Gork take thing from Gronk"),
    door: ("door is big and heavy. has hole in door near handle."),
    pig: ("pig is big and asleep, snores loud. Gronk not like pigs. Pig snore so loud leaf near pig blown around by snore sound."),
    table: ("Table is wood, pointy stone have spirals on it. Gronk not know what words mean. Maybe Mork, the brutally cunning, know what words mean. Gronk read words for Mork. 'You can Often see my effects, Although I am not ever seen. I come after the cross, Before the screen, and in between the taper.' "),
    rock: ("Rock is metal and big. Gronk can't move rock. Light is on other side of rock.")
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

    },
    pig: {
        pants: ("Gronk scoop pig up in pants, pig still asleep and loud, but Gronk not touching pig, so is okay."),
        pig: ("Gronk not know how putpig on pig. Gronk bad at origami."),
    },
    table: {
        pants: ("Gronk drape pants over stone, hear noise of stone move a little, but Gronk not see stone."),
        pig: ("gronk hold pig up to stone, Pig snore on stone. Gronk hear noise of stone move, see stone come apart. Stick come out of table where stone was"),
    },
    rock: {
        pants: ("Gronk throw pants at rock, rocks seem displeased by hit with pants."),
        pig: ("Gronk throw pig at rock, Pig make loud noise and go splat on rock. Pig now ex-pig. Gronk hear loud boom, Room shakes. Loud voice say to gronk from sky 'I am The Great Swine Soul Siphon, And You Have Slain My Swine. Perish. Gronk feel great pain of 200-500 wild boar for 3-5 minutes. Gronk is now Ex-gronk.")
    },
    stick: {
        pants: ("Gronk put pants on stick. Stick moves little."),
        pig: ("gronk not think put pig on stick good idea"),
    },

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
    
    if (item === "statue") {
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

//function for if gronk doesn't like something
function gronkFear(item) {
    let speak = document.createElement("span");
    let pause = document.createElement("br");
    let pause2 = document.createElement("br");

    speak.innerText = ("Gronk not like " + item + ". touch bad. Gronk no take.");

    play.appendChild(speak);
    play.appendChild(pause);
    play.appendChild(pause2);
};

//function to explain the game
function howToPlay() {
    let speak = document.createElement("span");
    let pause = document.createElement("br");
    let pause2 = document.createElement("br");

    speak.innerText = ("Gronk isn't very smart, so he only understands very specific phrases, like 'pick up rock' or 'go to door' try and keep your directions to him short and simple, or he will get confused.To start game, type 'play'. He also needs to 'use' tools on things in the room to interact with them, he's really dumb.");

    play.appendChild(speak);
    play.appendChild(pause);
    play.appendChild(pause2);
}

//function to display credits
function credits() {
    let speak = document.createElement("span");
    let pause = document.createElement("br");
    let pause2 = document.createElement("br");

    speak.innerText = ("QA consultants: Scubatapir, Jerome Chandler. QA testers: Space, Sage, Vanitas, Rena, Chtulhulhu, CedTech, Tankilorian. Puzzle consultants: D&D 5e Dungeon Master's guide, Nico, The 5th Element.");

    play.appendChild(speak);
    play.appendChild(pause);
    play.appendChild(pause2);
};

//if gronk dies

function exGronk() {
    let speak = document.createElement("span");
    let pause = document.createElement("br");
    let pause2 = document.createElement("br");

    speak.innerText = ("Gronk has become ex-gronk. please reload the page and try again.")

    play.appendChild(speak);
    play.appendChild(pause);
    play.appendChild(pause2);
};
//rooms
const room0 = {
    gronkEyes: ("Hole is big and deep and smooth, Gronk can't climb out. Big statue near Gronk with shiny hand. Door away from Gronk on wall. rocks on ground heavy, good size to hold. Gronk glad Gronk's pants still intact."),

    POI: ("statue", "door"),

    doorOpen:  false,



};

const room1 = {
    gronkEyes: ("Gronk open door, see room. Room dark and cold. Has small pointy stone on table in middle, with words on it. Pig in room asleep. Big metal rock cover exit, Gronk see light on other side."),

    POI: ("pig", "rock", "table", "stick"),

    doorOpen: false,

    stoneSolved: false,

};

//what makes the game go

//Gronk's brain

function gronkDo() {
    //makes sure gronk is alive to do
    if (gronk === true){
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
                if (item !== "pig" && item !== "pants") {
                    notHere(item);
                }
                else if (item === "pig") {
                   gronkFear(item);
                }
                else if (item === "pants") {
                    gainItem(item);
                };
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
                    gronkDescribes(item);
                }
                else if (item === "statue") {
                    gronkDescribes(item);
                }
                else if (item === "door" && room0.doorOpen === true) {
                    gronkSpeaks(room1.gronkEyes);
                    room += 1;
                    return room;
                }
                
                break;
            case 1:
                if (item !== "pig" && item !== "table" && item !== "rock") {
                    gronkConfuse(command);
                }
                else if (item === "pig") {
                    gronkDescribes(item);
                }
                else if (item === "table") {
                    gronkDescribes(item);
                }
                else if (item === "rock" && room1.doorOpen === false) {
                    gronkDescribes(item);
                }
                else if (item === "rock" && room1.doorOpen === true) {
                    gronkSpeaks(room2.gronkEyes);
                    room += 1;
                    return room;
                };
                break;
            case 2:
        }
            
        
    }
    //if the player wants to use something in their inventory
    else if (declaration === "use") {
        // makes sure the player has the tool they are using
        if (pockets.indexOf(tool) >=0 ){
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
                    };
                case 1:
                    if (tool !== "pants" && tool !== "pig") {
                        gronkConfuse(command);
                    }
                    else {
                        switch (item) {
                            case "pig":
                                if (tool === "pig"){
                                    gronkUse(tool, item);
                                }
                                else if (tool === "pants") {
                                    gronkUse(tool, item);
                                };
                                break;
                            case "table":
                                if (tool === "pig") {
                                    gronkUse(tool, item);
                                }
                                else if (tool === "pants") {
                                    gronkUse(tool, item);
                                }
                                break;
                            case "rock":
                                if (tool === "pig") {
                                    gronkUse(tool, item);
                                }
                                else if (tool === "pants") {
                                    gronkUse(tool, item);
                                }
                                break;
                            case "stick":
                                if (tool === "pig") {
                                    gronkUse(tool, item);
                                }
                                else if (tool === "pants") {
                                    gronkUse(tool, item);
                                }
                                break;
                        };
                    };
                case 2:   
                
                    
            };
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
    else if (gronk === false) {
        exGronk();
    };
};
$("#hatedOne").on("click", gronkDo);
$(".tutorial").on("click", howToPlay);
$(".credits").on("click", credits);