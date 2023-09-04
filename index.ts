import { Bicicleta } from "./bicicleta";
import { Cliente } from "./cliente";
import { Reserva } from "./reserva";

export class App {
    users: Cliente[] = []
    bikes: Bicicleta[] = []
    rents: Reserva[] = []

    findUser(email: string): Cliente {
        return this.users.find(user => user.email === email)!
    }

    registerUser(user: Cliente): void {
        for (const rUser of this.users) {
            if (rUser.email === user.email) {
                throw new Error('Duplicate user.')
            }
        }
        this.users.push(user)
    }

    registerBike(bike: Bicicleta): void{
        bike.id = crypto.randomUUID()
        this.bikes.push(bike)
    }

    removeUser(userRemove: Cliente): void{
        const index = this.users.findIndex((user) => user.email === userRemove.email)
        this.users.slice(index)
    }

    findBike(bikeID: String): Bicicleta{
        return this.bikes.find(bike => bike.id === bikeID)!
    }

    rentBike(bikeID: string, userEmail: string, startDate: Date, endDate: Date){
        const bikeReserva = this.findBike(bikeID)               // recuperar a bike
        const usuarioReserva = this.findUser(userEmail)         // recuperar o usuario
        // array somente com as reservas para bike (fazer um array que reserva as datas?)
        const novaReserva = Reserva.create(this.rents, bikeReserva, usuarioReserva, startDate, endDate) // tentar criar rent com o array e as informações da reserva
        this.rents.push(novaReserva)                            // adicionar a reserva ao array da reservas
    }


}