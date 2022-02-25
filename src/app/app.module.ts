import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { RouterModule } from '@angular/router';
import { AngularFireModule } from  '@angular/fire';
import { AngularFirestoreModule } from  '@angular/fire/firestore';
//import { AngularFireDatabaseModule } from  '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { ListaRestaurantComponent } from './components/lista-restaurant/lista-restaurant.component';
import { CrearRestaurantComponent } from './components/crear-restaurant/crear-restaurant.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListaRestaurantComponent,
    CrearRestaurantComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    RouterModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    //AngularFireDatabaseModule
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
