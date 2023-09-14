export class Cliente{
    static authenticate(password: string, password1: string) {
        throw new Error("Method not implemented.");
    }
    constructor(
        public name: string,
        public email: string,
        public password: string,
        public id?: string
    ) {}
}