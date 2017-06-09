import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Foto } from '../modelo/foto.entity';

@Injectable()
export class FotoServico {
    private headers: Headers;
    private url: string;

    constructor(private http: Http) {
        this.headers = new Headers();
        this.headers.append('Content-type', 'application/json');
        this.url = "http://localhost:3000/v1/fotos";
    }

    liste(): Observable<Foto[]> {
        return this.http.get(this.url)
                        .map(res => res.json());
    }

    getPorId(id: string) {
        return this.http.get(`${this.url}/${id}`)
                        .map(res => res.json());
    }

    salve(foto: Foto): Observable<Response> {

        if (foto._id) {
            return this.http.put(`${this.url}/${foto._id}`, JSON.stringify(foto), {headers: this.headers});
        } else {
            return this.http.post(this.url, JSON.stringify(foto), {headers: this.headers});
        }

    }

    remova(foto: Foto): Observable<Response> {
        return this.http.delete(`${this.url}/${foto._id}`);
    }

}