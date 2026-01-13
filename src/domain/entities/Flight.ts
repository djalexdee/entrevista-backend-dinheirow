import { FlightCode } from "../value-objects/FlightCode";

export class Flight {
    constructor(
        private code: FlightCode,
        private origin: string,
        private destination: string,
        private status: string,
        private maxCapacity: number = 180
    ) { }

    get availableSeats(): number {
      return 10
      // return this.maxCapacity - this.passengers.length;
    }

    canAddPassenger(): boolean {
        return this.status === 'ACTIVE';
    }

    responsibleAirline(): string {
      return this.code.responsibleAirline()
    }
}