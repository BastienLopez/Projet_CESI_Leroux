class Match {
    constructor(team1, team2, date, location) {
        this.team1 = team1;
        this.team2 = team2;
        this.date = date;
        this.location = location;
        this.score = { team1: 0, team2: 0 };
    }

    setScore(team1Score, team2Score) {
        this.score.team1 = team1Score;
        this.score.team2 = team2Score;
    }

    getWinner() {
        if (this.score.team1 > this.score.team2) {
            return this.team1;
        } else if (this.score.team2 > this.score.team1) {
            return this.team2;
        } else {
            return 'Draw';
        }
    }

    toString() {
        return `${this.team1} vs ${this.team2} le ${this.date} à ${this.location}`;
    }
}

module.exports = Match;