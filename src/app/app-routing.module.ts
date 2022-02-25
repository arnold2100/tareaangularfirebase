import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearRestaurantComponent } from './components/crear-restaurant/crear-restaurant.component';
import { ListaRestaurantComponent } from './components/lista-restaurant/lista-restaurant.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'listarestaurant', pathMatch: 'full'
  },
  {
    path: 'listarestaurant', component: ListaRestaurantComponent
  },
  {
    path: 'crearrestaurant', component: CrearRestaurantComponent
  },
  {
    path: 'editarrestaurant/:id', component: CrearRestaurantComponent
  },
  {
    path: '**', redirectTo: 'listarestaurant', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
