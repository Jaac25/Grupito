import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class PlantulasService {
  constructor(
    private http : HttpClient
  ) { }

  public getPlantulas() {
    return this.http.get(`${URL}/plantula/todos`)
  }

  public crearPlantula(nombre: string, descripcion: string, file: File){
    const data = {nombre,descripcion};
    return new Promise(resolve => {
      this.http.post(`${URL}/plantula/crear`, data)
      .subscribe((res: any) => {
        if(res.ok){
          resolve(true);
        }else{
          resolve(false);
        }
      });
    });
  }
}
