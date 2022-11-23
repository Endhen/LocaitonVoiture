import { Entity } from "./Entity"
import { Location } from "./Location"

export class Client implements Entity {

    public id :number = 0
    public nom? :string
    public prenom? :string
    public neph? :string
    public adresse? :string
    public tel? :string
    public locations :Location[] = []

    constructor(attributes ?:Partial<Client>) {
        Object.assign(this, attributes)
    }

    get urlPath() :string { return "clients/" }

}
