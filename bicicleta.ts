export class Bicicleta {
    public lat: number | undefined
    public long: number | undefined
    constructor(
        public name: string,
        public type: string,
        public bodySize: number,
        public maxLoad: number,
        public rate: number,
        public description: string,
        public ratings: number,
        public imageUrls: string[],
        public available: boolean = true,
        public id?: string
    ) {}
}