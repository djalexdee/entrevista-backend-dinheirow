import { Flight } from "./Flight";
import { Passenger } from "./Passenger";

export class Ticket {
    constructor(
        private owner: Passenger,
        private flight: Flight,
        private price: string,
        private departure: Date,
        private arrival: Date,
        private type: 'premium' | 'economy',
    ) { }
}