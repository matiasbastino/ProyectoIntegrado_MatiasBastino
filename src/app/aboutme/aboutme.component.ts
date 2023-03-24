import { Component, OnInit } from '@angular/core';
import { DatosService } from '../service/datos.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  //nombre= 'Matias';
  //apellido= 'Bastino';
  //Crear variables de instancias para almacenar los datos con los que trata
  infoDatos: any;
  
  //Inyectar el servicio para tener acceso en la Clase a los metodos
  constructor(private datosService: DatosService) { }

  ngOnInit(): void {
    //Esto es almacenar en la variable de instancias los datos recuperados
    this.datosService.getDatos().subscribe(data => {
      console.log(data);
      this.infoDatos=data.uno;
    })

  }
}
