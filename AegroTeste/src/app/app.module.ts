import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/layout/footer/footer.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';

import { AngularMaterialModule } from 'src/angular-material.module';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { CadastroFazendaComponent } from './components/cadastro-fazenda/cadastro-fazenda.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContadorErrosComponent } from './components/shared/contador-erros/contador-erros.component';
import { SnackbarComponent } from './components/layout/snackbar/snackbar.component';
import { ListarFazendasComponent } from './components/listar-fazendas/listar-fazendas.component';
import { CadastrarTalhaoComponent } from './components/cadastrar-talhao/cadastrar-talhao.component';
import { ListarTalhoesComponent } from './components/listar-talhoes/listar-talhoes.component';
import { RegistroProducaoComponent } from './components/registro-producao/registro-producao.component';
import { TipoMedidaAreaPipe } from './pipes/tipo-medida-area.pipe';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ChartsModule } from 'ng2-charts';
import { PieComponent } from './components/charts/pie/pie.component';
import { PublicidadeAppComponent } from './components/layout/publicidade-app/publicidade-app.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    CadastroFazendaComponent,
    DashboardComponent,
    ContadorErrosComponent,
    SnackbarComponent,
    ListarFazendasComponent,
    CadastrarTalhaoComponent,
    ListarTalhoesComponent,
    RegistroProducaoComponent,
    TipoMedidaAreaPipe,
    PieComponent,
    PublicidadeAppComponent
  ],
  imports: [BrowserModule,
    ChartsModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AngularMaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ], providers: [{
    provide: MatDialogRef,
    useValue: {}
  }, {
    provide: MAT_DIALOG_DATA,
    useValue: {}
  }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {


} 