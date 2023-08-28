import { Bicicleta } from "./bicicleta"
import { Cliente } from "./cliente"

export class Reserva{
    constructor(
        private tempo: number,
        private bike: Bicicleta,
        private pessoa: Cliente
    ){
        bike.disponivel = false                                         // quando a classe é chamada, ja faz a reserva da bike
    }                                                                   //o construtor da reserva vai asociar o cliente com bicicleta
    
    public calculaPrecoReserva(preco: number): number{
        preco = this.bike.preco * this.tempo
        return preco
    }                                                                   //preco definido pelas horas usadas
}