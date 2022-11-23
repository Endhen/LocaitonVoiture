import { Client } from "./Client";
import { Entity } from "./Entity";
import { Voiture } from "./Voiture";

export class Location implements Entity {

    constructor(
        public id :number = 0,
        public date ?:Date,
        public duree ?:number,
        public prix ?:number,
        public client ?:Client,
        public voiture ?:Voiture
    ) {}

    get urlPath() :string { return "locations/" }

}