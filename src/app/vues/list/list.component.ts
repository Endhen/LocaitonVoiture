import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/Client';
import { Entity } from 'src/app/models/Entity';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  public parentComponent :any
  public itemCollection :any
  public itemAttributes :any
  public entityForm :any

  constructor(
    private formBuilder :FormBuilder,
    private router :Router,
  ) {}

  ngOnInit(): void {
    this.parentComponent = history.state.parentComponent
    this.itemAttributes = this.parentComponent?.attributes

    this.parentComponent?.getAllEntity(
        (items :Entity[]) => 
          this.itemCollection = items
    )
    
    this.entityForm = this.formBuilder.group(
      this.parentComponent.getFormAttributes()
    )

    history.state["parentComponent"] = this.parentComponent
  }

  newItem() {
    let values = this.entityForm.value

    this.parentComponent?.createEntity({ ...values }, (newEntity :Entity) => 
      this.itemCollection?.push(newEntity)
    )
  }

  deleteItem(id :number, event :any) {
    event.preventDefault()

    this.parentComponent?.deleteEntity(id, (isDeleted :boolean) => 
        isDeleted? this.ngOnInit(): null
    )
  }

  goToDetails(id :number, event :any) {
    event.preventDefault()


    this.parentComponent.ngOnInit()

    this.router.navigate(
      [ this.parentComponent.serv.urlPath + '/details', id]
    )
    console.log("TEST", history.state)
  }

}
