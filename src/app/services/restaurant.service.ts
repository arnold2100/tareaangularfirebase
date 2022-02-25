
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private firestore: AngularFirestore) { }

  agregarrrestaurant(restaurant: any): Promise<any>
  {
    return this.firestore.collection('Restaurant').add(restaurant);
  }

  capturarrestaurant(): Observable<any>
  {
    return this.firestore.collection('Restaurant', ref => ref.orderBy('fechacreacion', 'asc')).snapshotChanges();
  }

  eliminarrestaurant(id:string): Promise<any> 
  {
    return this.firestore.collection('Restaurant').doc(id).delete();
  }

  editarrestaurant(id: string): Observable<any> 
  {
    return this.firestore.collection('Restaurant').doc(id).snapshotChanges();
  }

  actualizarrestaurant(id: string, data:any): Promise<any>
  {
    return this.firestore.collection('Restaurant').doc(id).update(data);
  }

//'Restaurant es el nombre de la base de datos de firebaase en firestore'
}
