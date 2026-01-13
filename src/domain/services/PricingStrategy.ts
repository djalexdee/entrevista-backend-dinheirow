import { Flight } from "../entities/Flight";
import { Passenger } from "../entities/Passenger";

interface IPricingStrategy {
    calculatePrice(flight: Flight, passenger: Passenger, bookingDate: Date): number;
}

class StandardPricingStrategy implements IPricingStrategy {
    calculatePrice(flight: Flight, passenger: Passenger, bookingDate: Date): number {
        // TODO: Implement standard pricing logic
        return 0;
    }
}