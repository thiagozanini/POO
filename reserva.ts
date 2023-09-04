import { Bicicleta } from "./bicicleta"
import { Cliente } from "./cliente"

export class Reserva {
    private constructor(
        public bike: Bicicleta,
        public user: Cliente,
        public dateFrom: Date,
        public dateTo: Date,
        public dateReturned?: Date
    ) {}

    static create(rents: Reserva[], bike: Bicicleta, user: Cliente, 
                  startDate: Date, endDate: Date): Reserva {
        const canCreate = Reserva.canRent(rents, startDate, endDate)
        if (canCreate) return new Reserva(bike, user, startDate, endDate)
        throw new Error('Overlapping dates.')
    }

    static canRent(rents: Reserva[], startDate: Date, endDate: Date): boolean {
        for (const rent of rents) {
            if (startDate <= rent.dateTo && endDate >= rent.dateFrom) {
                return false
            }
        }
        return true
    }
}