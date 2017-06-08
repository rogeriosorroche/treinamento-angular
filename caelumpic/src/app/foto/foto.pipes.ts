import { Pipe, PipeTransform } from '@angular/core';
import { Foto } from '../modelo/foto.entity';

@Pipe({
    name: 'filtroPorTitulo'
})
export class FiltroPorTitulo implements PipeTransform {
    transform(fotos: Foto[], titulo: string): Foto[] {
        if (titulo && fotos) {
            titulo = titulo.toLowerCase();
            fotos = fotos.filter(foto => foto.titulo.toLowerCase().includes(titulo));
        }
        return fotos;
    }
}