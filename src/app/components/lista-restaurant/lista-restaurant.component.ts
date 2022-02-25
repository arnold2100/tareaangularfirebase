import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-lista-restaurant',
  templateUrl: './lista-restaurant.component.html',
  styleUrls: ['./lista-restaurant.component.css']
})
export class ListaRestaurantComponent implements OnInit {

  itemrestaurant: any[] = [];

  constructor(private restaurantServicio: RestaurantService)
  {
  }

  ngOnInit(): void {
    this.obtenerrestaurant();
  }

  obtenerrestaurant(){
    this.restaurantServicio.capturarrestaurant().subscribe(data => {
      this.itemrestaurant =[];
      data.forEach((element: any) => {
        this.itemrestaurant.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        });
      });
      console.log(this.itemrestaurant);
    });
  }

  eliminarrest(id: string){
    this.restaurantServicio.eliminarrestaurant(id).then(()=>
    {
      console.log('eliminado');
    }).catch(error => {
      console.log(error);
    });
  }



}
