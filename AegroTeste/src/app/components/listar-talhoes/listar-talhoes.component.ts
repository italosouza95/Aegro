import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Fazenda } from 'src/app/models/fazenda';
import { Talhao } from 'src/app/models/talhao';
import { DialogService } from 'src/app/services/dialog.service';
import { FazendaService } from 'src/app/services/fazenda.service';
import { TalhaoService } from 'src/app/services/talhao.service';
import { CadastrarTalhaoComponent } from '../cadastrar-talhao/cadastrar-talhao.component';

@Component({
  selector: 'app-listar-talhoes',
  templateUrl: './listar-talhoes.component.html',
  styleUrls: ['./listar-talhoes.component.css']
})
export class ListarTalhoesComponent implements OnInit {
  fazendas: Fazenda[];

  constructor(private dialogRef: MatDialogRef<CadastrarTalhaoComponent>, public dialog: MatDialog, private data: DialogService, private talhoesService: TalhaoService, private fazendaService: FazendaService) {
  }

  ngOnInit(): void {
    this.fazendas = this.fazendaService.listarFazendas();
  }
  openDialogCadastrarOuEditarTalhao(fazendaOrigemTalhao: Fazenda, edicao: boolean) {
    this.dialogRef = this.dialog.open(CadastrarTalhaoComponent, {
      data: { fazendaOrigemTalhao: fazendaOrigemTalhao, edicao: edicao },
    });
    this.dialogRef.updateSize('600px', '645px')
    this.dialogRef.afterClosed().subscribe(result => {
      this.talhoesService.atualizaTalhoes(null)
    });
  }
  excluirTalhao(talhao) {
    this.talhoesService.excluirTalhao(talhao);
    this.fazendaService.atualizaFazendas(this.fazendas);
  }




















  numbers = 0;


  // observable = Observable.interval(1500);

  // subscription = this.observable.subscribe(value => {
  //   if (this.dialogRef && this.dialogRef.componentInstance) {
  //     this.dialogRef.componentInstance.data = { numbers: value };
  //   }
  // });

  cadastrarOuEditarTalhaoDialog(talhaoOuFazenda: Talhao, edicao: boolean): void {

    this.dialogRef = this.dialog.open(CadastrarTalhaoComponent, {
      width: '400px',
      height: '400px',
      data: { talhao: talhaoOuFazenda, edicao: edicao }
    });
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

}
