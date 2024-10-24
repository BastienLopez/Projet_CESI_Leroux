class Paris {
    constructor(match, cote, mise) {
        this.match = match;
        this.cote = cote;
        this.mise = mise;
    }

    calculerGainPotentiel() {
        return this.mise * this.cote;
    }

    afficherDetails() {
        console.log(`Match: ${this.match}`);
        console.log(`Cote: ${this.cote}`);
        console.log(`Mise: ${this.mise}`);
        console.log(`Gain Potentiel: ${this.calculerGainPotentiel()}`);
    }
}

module.exports = Paris;