import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Entity } from 'src/app/models/Entity';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {

  public parentComponent :any
  public itemCollection :any
  public itemAttributes :any
  public entityForm :any

  constructor(
    private formBuilder :FormBuilder,
    private router :Router,
  ) {}

  ngOnInit(): void {
    // this.parentComponent = history.state.parentComponent
    // this.itemAttributes = this.parentComponent?.attributes

    // this.parentComponent?.getAllEntity(
    //     (items :Entity[]) => 
    //       this.itemCollection = items
    // )
    console.log("Details", history.state)
    
    // this.entityForm = this.formBuilder.group(
    //   this.parentComponent?.getFormAttributes()
    // )

  }

}
