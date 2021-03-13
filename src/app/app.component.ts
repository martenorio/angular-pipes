import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Amber';
  nombre2: string = 'lisa lisa';
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  PI:number = Math.PI;
  porcentaje:number = 0.234;
  salario:number = 1234.5;
  videoURL:string = 'https://www.youtube.com/embed/ZzcUoAwYWU8';
  fecha:Date = new Date();
  idioma:string = 'en';
  valorPromesa = new Promise<string>( (resolve)=>{
    setTimeout(() => {
      resolve('Llego la data');
    }, 3500);
  })
  heroe = {
    nombre:'logan',
    edad:500,
    direccion:{
      calle:'first',
      casa:21
    }
  }
  cambiarIdioma(newIdiom:string){
    this.idioma = newIdiom;
  }
}
