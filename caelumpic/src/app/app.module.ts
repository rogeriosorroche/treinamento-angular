import 'rxjs/add/operator/map'; // importa extensão map para http

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutesModule } from './app.routes';

import { PainelModule } from './painel/painel.module';
import { FotoModule } from './foto/foto.module';

import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ListagemComponent
  ],
  imports: [
    AppRoutesModule,
    BrowserModule,
    HttpModule,
    FormsModule,
    FotoModule,
    PainelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
