import { RouterModule, Routes } from '@angular/router';

import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';

const appRoutes: Routes = [
    {path: '', component: ListagemComponent },
    {path: 'cadastro', component: CadastroComponent },
    {path: 'cadastro/:id', component: CadastroComponent },
    {path: '**', redirectTo: '' },
];

export const AppRoutesModule = RouterModule.forRoot(appRoutes, {useHash: true}); 