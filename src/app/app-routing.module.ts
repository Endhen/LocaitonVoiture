import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './vues/accueil/accueil.component';
import { ClientComponent } from './component/client/client.component';
import { ReservationComponent } from './component/reservation/reservation.component';
import { VoitureComponent } from './component/voiture/voiture.component';
import { DetailsComponent } from './vues/details/details.component';
import { ListComponent } from './vues/list/list.component';

const itemVues = [
  {
    path: 'liste',     
    title: 'Collection voitures',
    component: ListComponent,
  },
  {
    path: 'details/:id',     
    title: 'Détails',
    component: DetailsComponent,
  },
] 

const routes: Routes = [
  { path: '',             component: AccueilComponent     },
  { 
    path: 'voitures',     
    component: VoitureComponent,
    children: itemVues
  },
  { 
    path: 'clients',      
    component: ClientComponent,
    children: itemVues,
  },
  { 
    path: 'reservations', 
    component: ReservationComponent,
    children: itemVues
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
