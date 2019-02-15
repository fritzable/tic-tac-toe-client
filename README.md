Using jQuery and AJAX, this simple game allows players to compete against each other locally in tic-tac-toe.
This basic logic is written in JavaScript and the UI is structured and styled in HTML and CSS using Bootstrap.

2/13 4:30-5:00 add event listeners to square divs, begin pseudocode game logic

7:20-8:10 searching what data events provide. Need to figure out how to relate a
  div to the JS board.

2/14 8-8:15 Reading MDN Event docs. I think I just need to make nine functions to
  correspond to the nine squares.
8:15-8:20  Testing one event listener function, fixed jQuery so the function runs
  on click.
8:20-8:30 Writing one function to change the gameBoard array on click.
8:30-8:40 Fixing naming to count from 0.
9-9:20 change layout from column to grid
9:30-10:00 1 on 1, reinforce methodical schedule approach
10:00-10:15 Refactor click handlers to fire events on any square and pass the
  square's id to the marking function.
10:15-10:45 Add turn switching function
...
3:45-4:45 Writing check function for game win or draw
2/15 8:10-9 Writing check function for game win or draw, and issue request
9-9:20 finished issue request with solution
9:20-9:30 uncommented all other row conditions to make sure they would work with win check function.
10:15 - 11:10 Update the game engine when the game board is updated. for me right now this will be making the X and O appear
