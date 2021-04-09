import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio', loadChildren: () => 
    import('./components/inicio/inicio.module').then(m => m.InicioModule)
  },
  {
    path: 'plantulas', loadChildren: () => 
    import('./components/plantulas/plantulas.module').then(m => m.PlantulasModule)
  },
  {
    path: 'asesoramiento', loadChildren: () => 
    import('./components/asesoramiento/asesoramiento.module').then(m => m.AsesoramientoModule)
  },
  {
    path: 'about', loadChildren: () => 
    import('./components/about/about.module').then(m => m.AboutModule)
  },
  {path:'',pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
