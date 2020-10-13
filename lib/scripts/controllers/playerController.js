import Player from '../models/player';

export default newPlayer = (name, wins = 0, losses = 0, ties = 0) => {
    let player = new Player(name, wins, losses, ties);
    return player;
}