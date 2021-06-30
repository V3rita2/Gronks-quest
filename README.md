# Gronk's kwest
## Concept: 
A short text-based adventure game in which you must help a not particularly bright ork navigate a dungeon to get back home to his family.
## Wireframes:
## Technologies Used:
    - HTML
    - CSS 
    - JavaScript
## Approach: 
I started by making the first room, which was a simple puzzle, and adding functions as I needed them, until I had enough code for the first room to be playable from start to end.
This took most of my time, as I didn't know what I needed until I realized I didn't have it. The main bulk of the logic for the game takes place in one giant function.
that function calls many, many other functions inside of it, so once those were written, adding more rooms was a simple process of coming up with a puzzle,
then adding any needed data to the use and describe objects, and then filling in the blanks and expanding the main function.
## Challenges: 
There was an issue with how the player inputs commands, that being that html forms reload the page on submit, So I had to make an invisible button
that clicked when youpressed enter, stopped the form from submitting properly, and then ran the game function.
However, this means that the form no longer clears itself, so the player must manually delete previous inputs.
## Additional information:
The game in it's current state is small, and short, but I might expand it on my free time, and give it an actual story
## App Demo 
Link to GitHub project https://v3rita2.github.io/
