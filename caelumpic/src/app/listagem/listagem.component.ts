import { Component } from '@angular/core';
import { Http } from '@angular/http';

import { Foto } from '../modelo/foto.entity';

@Component({
  moduleId: module.id,
  selector: 'listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent {
  fotos: Foto[]= [];

  constructor(http: Http) {

    http.get('http://localhost:3000/v1/fotos')
        .map(res => res.json())
        .subscribe(fotos => this.fotos = fotos
                  ,erro => console.log(erro));

  }

}
