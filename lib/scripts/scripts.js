// variables
let newPlayerform = document.getElementById('newplayerform');


// player object
function Player(name) {
    this.name = name;
}

// match object
function Match(player1, player2, result1, result2) {

}

// main
/**
 * read new player name
 * save new player name
 * 
 * choose name player 1
 * choose name player 2
 * enter results
 * save results
 * 
 * show leaderboard
 * 
 * 
 */


// eventlisteners
newPlayerform.addEventListener('click', event => {
    event.preventDefault();
    let newPlayer = new Player(newplayername.value);
    let playerjson = JSON.stringify(newPlayer);
    console.log(playerjson);
    console.log('start');
    console.log(newPlayer);
    console.log('end');
});