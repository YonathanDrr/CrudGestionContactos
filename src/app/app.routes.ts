import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';
import { AgregarContactoComponent } from './components/agregar-contacto/agregar-contacto.component';
import { EditarContactoComponent } from './components/editar-contacto/editar-contacto.component';

const routes: Routes = [
  { path: '', component: ListaContactosComponent },
  { path: 'agregar', component: AgregarContactoComponent },
  { path: 'editar/:id', component: EditarContactoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
