export class Tbl {
    #finish: number;
    #active: boolean;
    name: string;
    constructor(totalseconds: number, active: boolean, name: string) {
        this.#finish = totalseconds;
        this.#active = active;
        this.name = name;
    }
    get timeLeft() {
        return this.#finish;
    }
    set active(active: boolean) {
        console.log('Passed active ' + active + ' to ' + this.name);
        this.#active = active === true;
        console.log(this.name, this.active);
    }
    get active() {
        return this.#active;
    }
    get color(): string {
        if (this.#active) {
            return '#080';
        }
        return '#f00';
    }
    countdown() {
        if ((this.#finish > 0) && this.#active) {
            this.#finish -= 1;
        }
    }
}