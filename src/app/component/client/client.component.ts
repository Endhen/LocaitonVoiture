import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/Client';
import { ServerService } from 'src/app/service/server.service';
import { EntityComponent } from '../EntityComponent';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.sass']
})
export class ClientComponent extends EntityComponent<Client> implements OnInit {

  public attributes = [
    { key: "nom"      , name: "Nom"     },
    { key: "prenom"   , name: "Prenom"  },
    { key: "neph"     , name: "NEPH"    },
    { key: "adresse"  , name: "Adresse" },
    { key: "tel"      , name: "Tél"     , type: "tel"},
  ]

  constructor(
    public server :ServerService<Client>
  ) { super(server, new Client) }
  
  ngOnInit(): void { history.state["parentComponent"] = this ; console.log("Client", history.state) }

}

