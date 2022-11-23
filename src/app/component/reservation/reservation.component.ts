import { Component, OnInit } from '@angular/core';
import { Location } from 'src/app/models/Location';
import { ServerService } from 'src/app/service/server.service';
import { EntityComponent } from '../EntityComponent';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.sass']
})
export class ReservationComponent extends EntityComponent<Location> implements OnInit {

  public attributes = [
    { key: "date"  , name: "Date" , type: "date"   },
    { key: "duree" , name: "Duree", type: "number" },
    { key: "prix"  , name: "Prix" , type: "number" },
  ]

  constructor(
    public server :ServerService<Location>
  ) { super(server, new Location) }
  
  ngOnInit(): void { history.state["parentComponent"] = this }

}
