import { Validators } from "@angular/forms"
import { Entity } from "../models/Entity"
import { ServerService } from "../service/server.service"

interface entityAttribute { key :string , name :string, type ?:string}

export abstract class EntityComponent<T extends Entity> {

    abstract attributes :entityAttribute[]

    constructor(
        protected serv :ServerService<T>,
        private type :T
    ) { serv.urlPath = type.urlPath }

    getAllEntity(callback: any): void {
        this.serv.getAll(this.getFormAttributes(), (entities: any) =>
            callback(entities)
        )
    }

    getEntityById(id: number): void {
        throw new Error('Method not implemented.');
    }

    createEntity(entity :T, callback: any) :void {
        this.serv.create(entity, (newEntity :T) => 
          callback(newEntity)
        )
    }

    updateEntity(entity: T): void {
        throw new Error('Method not implemented.');
    }

    deleteEntity(id: number, callback: any): void {
        this.serv.delete(id, (isDeleted :boolean) => 
          callback(isDeleted)
        )
    }

    getFormAttributes() {
        let formAttr: any = {}
        for (let attr of this.attributes)
            formAttr[attr.key] = ''

        return formAttr
    }

}