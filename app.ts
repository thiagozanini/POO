import { Bicicleta } from "./bicicleta";
import { Cliente } from "./cliente";
import { Reserva } from "./reserva";
import crypto from 'crypto'

export class App {
    users: Cliente[] = []
    bikes: Bicicleta[] = []
    rents: Reserva[] = []

    findUser(email: string): Cliente {      // procura se ja tem usuario registrado
        return this.users.find(user => user.email === email)!
    }

    registerUser(user: Cliente): string {     // registra usuario
        for (const rUser of this.users) {
            if (rUser.email === user.email) {
                throw new Error('Duplicate user.')
            }
        }
        const newID = crypto.randomUUID()
        user.id = newID
        this.users.push(user)
        return newID
    }

    registerBike(bike: Bicicleta): string {
        const newId = crypto.randomUUID()
        bike.id = newId
        this.bikes.push(bike)
        return newId
    }

    removeUser(userRemove: Cliente): void{  // remove um usario
        const index = this.users.findIndex((user) => user.email === userRemove.email)
        this.users.slice(index)
    }

    findBike(bikeID: String): Bicicleta{    // procura se tem bike registrada
        return this.bikes.find(bike => bike.id === bikeID)!
    }

    rentBike(bikeID: string, userEmail: string, startDate: Date, endDate: Date){
        const bikeReserva = this.findBike(bikeID)               // recuperar a bike
        const usuarioReserva = this.findUser(userEmail)         // recuperar o usuario
        const bikeRents = this.rents.filter(rent => rent.bike.id === bikeID && !rent.dateReturned)      // array somente com as reservas para bike (fazer um array que reserva as datas?)
        const novaReserva = Reserva.create(this.rents, bikeReserva, usuarioReserva, startDate, endDate) // tentar criar rent com o array e as informações da reserva
        this.rents.push(novaReserva)                            // adicionar a reserva ao array da reservas
    }
    returnBike(bikeId: string, userEmail: string) {
        const today = new Date()
        const rent = this.rents.find(rent => 
            rent.bike.id === bikeId &&
            rent.user.email === userEmail &&
            rent.dateReturned === undefined &&
            rent.dateFrom <= today
        )
        if (rent) {
            rent.dateReturned = today
            return
        }
        throw new Error('Rent not found.')
    }  
    listUser(): Cliente[]{
        if(this.users != null)
            return this.users
        return []
    } //listagem de ususarios

    listRent(): Reserva[]{
        if(this.rents != null)
            return this.rents
            return []
    }//listagem de reserva e alugueis

    listBike(): Bicicleta[]{
        if(this.bikes != null)
            return this.bikes
        return []
    }//listagem de bikes
}