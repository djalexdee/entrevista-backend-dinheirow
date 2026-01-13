export class Passenger {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private gender: string
    ) {}

    addToFlight(flightCode: string): void {
        throw new Error('Method not implemented');
    }

    isOnFlight(flightCode: string): boolean {
        throw new Error('Method not implemented');
    }
}