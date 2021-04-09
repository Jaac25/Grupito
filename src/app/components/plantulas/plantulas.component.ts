import { Component, OnInit } from '@angular/core';
import {PlantulasService} from 'src/app/services/plantulas/plantulas.service';


@Component({
  selector: 'app-plantulas',
  templateUrl: './plantulas.component.html',
  styleUrls: ['./plantulas.component.css']
})
export class PlantulasComponent implements OnInit {

  constructor(
    public plantulaService: PlantulasService,
  ) { }
  
  datosPlantulas: any;

  nombrePlantulaCrear!: string;
  descripcionPlantulaCrear!: string;
  fotoSemilleroCrear!: File;

  ngOnInit(): void {
    this.todasPlantulas();
  }
  async todasPlantulas() {
    this.datosPlantulas = await this.plantulaService.getPlantulas().toPromise();
  }

  async guardarPlantula(){
    const plantula = await this.plantulaService.crearPlantula(this.nombrePlantulaCrear,this.descripcionPlantulaCrear,
      this.fotoSemilleroCrear);  
    if(this.nombrePlantulaCrear != "" || this.nombrePlantulaCrear != undefined  || this.descripcionPlantulaCrear != undefined || this.descripcionPlantulaCrear != "" || this.fotoSemilleroCrear != undefined || this.fotoSemilleroCrear != null){
      alert("No se guardó la plántula");
    }else{
      alert("Plántula guardada");
    }
  }
}
