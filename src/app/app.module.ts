import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { TabelaComponent } from './tabela/tabela.component';
import { FormsModule } from '@angular/forms';
import { AlunoService } from './aluno.service';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    TabelaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AlunoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
