import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantulasComponent } from './plantulas.component';

const routes: Routes = [
  {path: '',component: PlantulasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlantulasRoutingModule { }
