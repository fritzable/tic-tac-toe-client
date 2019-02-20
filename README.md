Using jQuery and AJAX, this simple game allows players to compete against each other locally in tic-tac-toe.
This basic logic is written in JavaScript and the UI is structured and styled in HTML and CSS using Bootstrap.

Planning:
I planned to follow a schedule with styling prioritized last, in order to ensure I could get my JavaScript game logic and AJAX API requests working correctly first.

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
11:30 - 11:45 Add messaging for the user when the user clicks on an invalid space
1:15 - 2:00 Add messaging for the user when the game is over (win or draw)
2:00 - 2:15 prevent clicking after a game ends
2:15 - 2:45 writing sign up function
3:00 - 3:30 writing sign in function
2/16 12:10 - 12:45 refactoring functions into different files
1:00 - 2:00 troubleshooting sign out 400 Error
2/18 8:00 - 8:30 adding success/failure messages to sign in / sign out etc forms
9:00-9:30 showing / hiding board
10:30 - 11:00 showing / hiding forms
11:00 - 11:30 adding newGame button
2:00 - 2:45 creating update curl script
2:45 - 3:30
4:30 - 4:42 writing create ajax call
5:00 - 6:00 writing update ajax call
6:00 - 6:40 work on get games call. Found bug: winner message display on draw.
could not duplicate.
2/19 8:00 - 8:30 writing ajax GET games call
9:00 - 9:30 fixing game message when sign out / sign in during game
9:30 - 10:30 fixing create game on sign in
10:45 - 11:00 found and fixed bug: winner @ ["", "O", "", "X", "O", "X", "", "", "X"]
11:00 - 11:30 fixing update game to change done to true on complete
12:00 - 1:00 fixing update game to change X and O value on moves
1:15 - 1:45 fixing bugs on new game, added new game to all signed in views
1:45 - 2:15 hide get games results on new game
2/20 8 - 11 resolve invalid move message, resolve create game on sign in vs new

Thoughts for bonus features:
Say which player won
Detect draw game sooner
Log in automatically on sign u p 
