import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-crear-restaurant',
  templateUrl: './crear-restaurant.component.html',
  styleUrls: ['./crear-restaurant.component.css']
})
export class CrearRestaurantComponent implements OnInit {

  crearrestaurant: FormGroup;
  submited =false;
  id:string | null;
  titulo = 'AGREGAR LOCAL'

  constructor(private fb: FormBuilder,
              private restaurantServicio: RestaurantService,
              private router: Router,
              private aRoute: ActivatedRoute) { 
    this.crearrestaurant = this.fb.group(
      {
        nombre: ['', Validators.required],
        direccion: ['', Validators.required],
        telefono: ['', Validators.required],
        plato: ['', Validators.required],
      })
      this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    //this.editarrestaurant();
  }

  agregareditarrestaurant()
  {
    this.submited=true;
    if(this.crearrestaurant.invalid)
    {
      return;
    }
    if(this.id === null){
      this.agregarrestaurant();
    }else{
      this.editarres(this.id);
    }
  }

  agregarrestaurant()
  {
    const restaurant: any ={
      nombre:this.crearrestaurant.value.nombre,
      direccion:this.crearrestaurant.value.direccion,
      telefono:this.crearrestaurant.value.telefono,
      plato:this.crearrestaurant.value.plato,

      fechacreacion: new Date(),
      fechaactualizacion: new Date()
    }
    this.restaurantServicio.agregarrrestaurant(restaurant).then(() =>{
      console.log('empleado registrado');
      this.router.navigate(['/listarestaurant'])
    }).catch(error => {
      console.log(error);
    })
  }

  editarres(id: string)
  {
    const restaurant: any ={
      nombre:this.crearrestaurant.value.nombre,
      direccion:this.crearrestaurant.value.direccion,
      telefono:this.crearrestaurant.value.telefono,
      plato:this.crearrestaurant.value.plato,

      fechaactualizacion: new Date()
    }
    this.restaurantServicio.actualizarrestaurant(id, restaurant).then(()=> {
      this.router.navigate(['/listarestaurant']);
    })

  }


  editarrestaurant(){
    this.titulo='EDITAR RESTAURANT';
    if(this.id !== null){
      this.restaurantServicio.editarrestaurant(this.id).subscribe(data =>{
        this.crearrestaurant.setValue({
          nombre: data.payload.data()['nombre'],
          direccion: data.payload.data()['direccion'],
          telefono: data.payload.data()['telefono'],
          plato: data.payload.data()['plato']
        })
      })
    }
  }

}
