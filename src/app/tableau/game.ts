export class Game {
    #winner: number;
    #time: Array<number> = [0, 0];
    constructor(winner: number, time1: number, time2: number) {
        this.#winner = winner;
        this.#time[0] = time1;
        this.#time[1] = time2;
    }
    get winner() {
        return this.#winner;
    }
    get t1 () {
        return this.#time[0];
    }
    get t2 () {
        return this.#time[1];
    }
}