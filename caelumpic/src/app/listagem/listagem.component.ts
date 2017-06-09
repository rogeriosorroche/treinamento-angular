import { Component } from '@angular/core';
import { Http } from '@angular/http';

import { Foto } from '../modelo/foto.entity';
import { FotoServico } from '../servico/foto.service';

@Component({
  moduleId: module.id,
  selector: 'listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent {
  fotos: Foto[]= [];

  constructor(private fotoServico: FotoServico) {
  }

  ngOnInit(): void {
    // poderia estar no construtor
    this.liste();
  }

  private liste(): any {
    this.fotoServico.liste()
                    .subscribe(fotos => this.fotos = fotos
                               ,erro => console.log(erro));
    return true;
  }

  remova(foto: Foto): void {
    this.fotoServico.remova(foto)
                    //.subscribe(res => this.liste()
                    .subscribe(res => {
                                  let f = this.fotos.slice(0);
                                  f.splice(f.indexOf(foto), 1);
                                  this.fotos = f;
                               }
                               ,erro => console.log(erro));
  }

}
