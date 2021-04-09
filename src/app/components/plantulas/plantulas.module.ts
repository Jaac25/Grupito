import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlantulasRoutingModule } from './plantulas-routing.module';
import { PlantulasComponent } from './plantulas.component';


@NgModule({
  declarations: [PlantulasComponent],
  imports: [
    CommonModule,
    PlantulasRoutingModule
  ]
})
export class PlantulasModule { }
