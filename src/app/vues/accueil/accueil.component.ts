import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.sass']
})
export class AccueilComponent implements OnInit {

  constructor(
    public router :Router,
  ) { }

  ngOnInit(): void {
    // history.state["Hmm"] = "oui"
    console.log("Home", history.state)
  }

}
