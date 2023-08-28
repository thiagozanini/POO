import { Bicicleta } from "./bicicleta";
import { Cliente } from "./cliente";
import { Reserva } from "./reserva";

class Loja{
    bicicleta: Bicicleta[] = []

    public registraBicicleta(bicicleta: Bicicleta): void {
        this.bicicleta.push(bicicleta)
    }                                                           //registra as bicicletas em um vetor
}
const novoCliente = new Cliente(12345, 'thiago', 'rua x')
let novaBike = new Bicicleta(false)
const lojaZanini = new Loja
lojaZanini.registraBicicleta(novaBike)
const novaReserva = new Reserva(10, novaBike, novoCliente)