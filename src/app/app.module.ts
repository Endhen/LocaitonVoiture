import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './vues/list/list.component';
import { DetailsComponent } from './vues/details/details.component';
import { CarIconComponent } from './svg/car-icon/car-icon.component';
import { ClientsIconComponent } from './svg/clients-icon/clients-icon.component';
import { ReservationIconComponent } from './svg/reservation-icon/reservation-icon.component';
import { VoitureComponent } from './component/voiture/voiture.component';
import { ClientComponent } from './component/client/client.component';
import { ReservationComponent } from './component/reservation/reservation.component';
import { AccueilComponent } from './vues/accueil/accueil.component';
import { DetailsIconComponent } from './svg/details-icon/details-icon.component';
import { DeleteIconComponent } from './svg/delete-icon/delete-icon.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EntityComponent } from './component/EntityComponent';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailsComponent,
    CarIconComponent,
    ClientsIconComponent,
    ReservationIconComponent,
    VoitureComponent,
    ClientComponent,
    ReservationComponent,
    AccueilComponent,
    DetailsIconComponent,
    DeleteIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
