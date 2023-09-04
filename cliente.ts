export class Cliente{
    constructor(
        public name: string,
        public email: string,
        public password: string,
        public id?: string
    ) {}
}