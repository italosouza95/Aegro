import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarTalhaoComponent } from './components/cadastrar-talhao/cadastrar-talhao.component';
import { CadastroFazendaComponent } from './components/cadastro-fazenda/cadastro-fazenda.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListarFazendasComponent } from './components/listar-fazendas/listar-fazendas.component';
import { ListarTalhoesComponent } from './components/listar-talhoes/listar-talhoes.component';
import { RegistroProducaoComponent } from './components/registro-producao/registro-producao.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "cadastro-fazenda",
    component: CadastroFazendaComponent
  },
  {
    path: "cadastro-talhao",
    component: CadastrarTalhaoComponent
  },
  {
    path: "listar-fazendas",
    component: ListarFazendasComponent,
  },
  {
    path: "listar-talhoes",
    component: ListarTalhoesComponent,
  },
  {
    path: 'registro-producao', component: RegistroProducaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
