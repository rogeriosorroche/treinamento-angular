import { Component, Input } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Foto } from '../modelo/foto.entity';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {
    foto: Foto;

    constructor(private http: Http) {
        this.foto = new Foto();
    }

    salve(event) {

        event.preventDefault();

        const headers = new Headers();
        headers.append('Content-type', 'application/json');

        this.http.post('http://localhost:3000/v1/fotos', JSON.stringify(this.foto), {headers})
                 .map(res => res.json())
                 .subscribe( (id) => {
                            console.log('Id inserido:', id)
                            this.foto = new Foto();
                           }
                           , erro => console.log(erro));

    }

}
