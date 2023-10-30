import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { TabelaComponent } from './tabela/tabela.component';

const routes: Routes = [
  { path: 'formulario', component: FormularioComponent },
  { path: 'tabela', component: TabelaComponent },
  { path: '', redirectTo: '/formulario', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }