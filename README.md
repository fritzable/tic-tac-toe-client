## About:

Using jQuery and AJAX, this simple game allows players to compete against each other locally in tic-tac-toe.
This basic logic is written in JavaScript and the UI is structured and styled in HTML and CSS using Bootstrap.

## Planning:

I planned to follow a schedule with styling prioritized last, in order to ensure I could get my JavaScript game logic and AJAX API requests working correctly first.
For the most part, problems that arose with programming the game only required an opposing command to be inserted or substituted for a faulty command. Using jQuery's `.hide` method for example, I hid several elements individually in conditions when I did not want them seen. This required case-by-case application of `.show` in other conditions. Additional modularity could have been acheived by designating groups on elements based on what view they should be visible in, and then either hiding or showing the group.

## Design:

My initial wireframe had different views for sign up and sign in, inspired by the three-in-a-row theme of the game.
See [wireframe image.](/wireframe.PNG)
This would become radically simplified during development.

I came up with some user stories: [USER STORIES](/USER-STORIES.md/)

>The dream to redefine the entire tic-tac-toe-playing experience for the ages would have to wait for another version.

## Thoughts for bonus features:

- Detect draw game sooner.
- Log in automatically on sign up.
- Animate the drawing of the four lines at each new game.
- When placing a mark, set it at the X,Y coordinates of the cursor on click.
- Using :hover pseudoclasses, change color of blank squares to one of three colors: a neutral color, and in the case of a second or subsequent game, a color associated with X when hovering over a square that was chosen for X in the immediately prior game, and a color associated with O when hovering over a square that was previously chosen for O.
- Make the gameboard an open grid of hundreds of squares; the first move can go anywhere, the second move can go anywhere no more than two squares away from the first mark, all subsequent can only be made according to the limitations of a regular tic-tac-toe board that could exist with the first two marks in it.
