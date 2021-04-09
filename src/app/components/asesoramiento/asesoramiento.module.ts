import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsesoramientoRoutingModule } from './asesoramiento-routing.module';
import { AsesoramientoComponent } from './asesoramiento.component';


@NgModule({
  declarations: [AsesoramientoComponent],
  imports: [
    CommonModule,
    AsesoramientoRoutingModule
  ]
})
export class AsesoramientoModule { }
