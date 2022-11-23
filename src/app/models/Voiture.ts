import { Entity } from "./Entity"
import { Location } from "./Location"

export class Voiture implements Entity {

    constructor(
        public id :number = 0,
        public matricule ?:string,
        public modele ?:string,
        public marque ?:string,
        public moteur ?:string,
        public prix ?:number,
        public disponible ?:boolean,
        public locations :Location[] = []
    ) {}

    get urlPath() :string { return "voitures/" }

}