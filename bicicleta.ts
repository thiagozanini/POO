import { Cliente } from "./cliente"

export class Bicicleta{
    public modelo: string
    public preco: number
    public disponivel: boolean = true

    constructor(modelo: boolean) {          //construtor de bicicleta cadastra o modelo "mounatain" ou "urban"
        if(modelo == true){
            this.modelo = 'urban'
            this.preco = 10
        } else {
            this.modelo = 'mountain'
            this.preco = 15
        }                                   //preco definido por hora
    }
}