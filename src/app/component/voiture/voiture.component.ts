import { Component, OnInit } from '@angular/core';
import { Voiture } from 'src/app/models/Voiture';
import { ServerService } from 'src/app/service/server.service';
import { EntityComponent } from '../EntityComponent';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.sass']
})
export class VoitureComponent extends EntityComponent<Voiture> implements OnInit {

  public attributes = [
    { key: "matricule"  , name: "Matricule"  },
    { key: "modele"     , name: "Modele"     },
    { key: "marque"     , name: "Marque"     },
    { key: "moteur"     , name: "Moteur"     },
    { key: "prix"       , name: "Prix"       , type: "number"  },
    { key: "disponible" , name: "Disponible" , type: "checkbox" },
  ]

  constructor(
    public server :ServerService<Voiture>
  ) { super(server, new Voiture) }
  
  ngOnInit(): void { history.state["parentComponent"] = this }

}
