import { Injectable } from '@angular/core';
// Esto es para que se suscriba y reciba respuesta de forma asincronica
import { Observable } from 'rxjs';
// Esto es para poder hacer peticiones
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DatosService {
// El primer http se llama alias
  constructor(private http:HttpClient) { }
  //Metodo observable que devuelve los datos
  getDatos():Observable<any> {
  //Se llama JSON con su path -ruta- o bien
  return this.http.get('./assets/JSON/DatosService.json')
}

}
