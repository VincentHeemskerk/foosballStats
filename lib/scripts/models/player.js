export default class Player {
    constructor(name, wins = 0, losses = 0, ties = 0) {
        this.name = name;
        this.wins = wins;
        this.losses = losses;
        this.ties = ties;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    setMatchWins(wins) {
        this.wins = wins;
    }

    increaseWins() {
        this.wins++;
    }

    getMatchWins(wins) {
        return this.wins;
    }

    setMatchLosses(losses) {
        this.losses = losses;
    }

    increaseLosses() {
        this.losses++;
    }

    getMatchLosses(losses) {
        return this.losses;
    }

    setMatchTies(ties) {
        this.ties = ties;
    }

    increaseTies() {
        this.ties++;
    }

    getMatchTies(ties) {
        return this.ties;
    }
}