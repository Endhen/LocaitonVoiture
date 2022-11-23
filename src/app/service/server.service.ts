import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Entity } from '../models/Entity';

type EntityCallBack = (entity :Entity | Entity[]) => void

@Injectable({
  providedIn: 'root'
})
export class ServerService<T extends Entity> {

  private serverAdress :string = environment.serverAdress
  public urlPath: string = ''

  constructor(
    private http :HttpClient,
  ) { }

  getAll(entity :T, callback :any) :void {

    this.http
      .get<T[]>(this.serverAdress + 'api/' + this.urlPath)
      .subscribe( collection => {
        collection.map(element => 
          Object.setPrototypeOf(element, entity)
        )
        callback(collection)
      })
    
  }

  // getById(id :number) :EntityComponent

  create(entity :T, callback :any) {
    this.http
      .post(this.serverAdress + 'api/' + this.urlPath, entity)
      .subscribe( entity => {
        callback(entity)
      })
  }

  // update(entity :EntityComponent) :void

  delete(id :number, callback :any) :void {
    this.http
      .delete(this.serverAdress + 'api/' + this.urlPath + id)
      .subscribe( httpCode => 
        callback(httpCode == 204)
      )
  }

}


