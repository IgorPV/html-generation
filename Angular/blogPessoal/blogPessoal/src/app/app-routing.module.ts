import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { EditarTemaComponent } from './editar-tema/editar-tema.component';
import { EditarUserComponent } from './editar-user/editar-user.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [
  {path:'', redirectTo:'entrar',pathMatch:'full'},
  {path:'entrar', component: EntrarComponent},
  {path:'cadastrar', component: CadastrarComponent},
  {path:'inicio', component: InicioComponent},
  {path:'tema', component: TemaComponent},
  {path:'editar-user', component: EditarUserComponent},
  {path:'editar-tema/:id', component: EditarTemaComponent},
  {path: 'tema-delete/:id', component: TemaDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
