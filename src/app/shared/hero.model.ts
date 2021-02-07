export class Hero {
    constructor(
        public name: string,
        public powers: string[],
        public rate: number,
        public id: number,
        public imagePath: string,
        public description: string,
    ) { }
}