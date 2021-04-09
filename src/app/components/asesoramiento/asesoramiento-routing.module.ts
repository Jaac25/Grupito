import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsesoramientoComponent } from './asesoramiento.component';

const routes: Routes = [
  {path: '',component: AsesoramientoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsesoramientoRoutingModule { }
