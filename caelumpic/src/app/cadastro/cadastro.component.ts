import { Component, Input } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Foto } from '../modelo/foto.entity';
import { FotoServico } from '../servico/foto.service';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html',
    styleUrls: [ './cadastro.component.css'] 
})
export class CadastroComponent {
    foto: Foto;
    formControl: FormGroup;

    constructor(private fotoServico: FotoServico, private route: ActivatedRoute, private router: Router, fb: FormBuilder) {

        this.foto = new Foto();

        this.formControl = fb.group({
            titulo: ['', 
                    Validators.compose([
                        Validators.required, 
                        Validators.minLength(5)
                ])],
            url: ['', 
                Validators.compose([
                    Validators.required
                ])],
            descricao: [this.foto.descricao]
        });

    }

    ngOnInit() {

        this.route.params.subscribe(params => {

            let id = params['id'];

            if (id) {

                this.fotoServico.getPorId(id)
                                .subscribe(
                                    foto => this.foto = foto,
                                    erro => console.log(erro)
                                );

            }

        });

    }

    salve(event) {

        event.preventDefault();

        this.fotoServico.salve(this.foto)
                        .subscribe( res => {
                                        this.foto = new Foto();
                                        this.router.navigate(['']);
                                    }, 
                                    erro => console.log(erro));

    }

}
