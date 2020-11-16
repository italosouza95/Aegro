import { Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Fazenda } from 'src/app/models/fazenda';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CadastroFazendaComponent } from '../cadastro-fazenda/cadastro-fazenda.component';
import { DialogService } from 'src/app/services/dialog.service';
import { FazendaService } from 'src/app/services/fazenda.service';
@Component({
  selector: 'app-listar-fazendas',
  templateUrl: './listar-fazendas.component.html',
  styleUrls: ['./listar-fazendas.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ],
})
export class ListarFazendasComponent implements OnInit, OnChanges {
  message: string;

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  dataSource = ELEMENT_DATA;
  displayedColumns = ['nome', 'proprietario', 'tipoMedidaArea', 'cidade', 'estado', 'telefone', 'email', 'acoes', 'detalhes'];
  expandedElement: Fazenda | null;

  constructor(public dialog: MatDialog, private modalService: DialogService, private fazendaService: FazendaService) { }

  openDialogCadastroFazenda() {
    const dialogRef = this.dialog.open(CadastroFazendaComponent, {
      data: { fazenda: null, edicao: false },
    });
    dialogRef.afterClosed().subscribe(atualizarTabela => {

      if (atualizarTabela != undefined) {
        this.dataSource = atualizarTabela;
      }
    })
    dialogRef.updateSize('600px', '600px')

  }


  ngOnChanges() { }

  ngOnInit() {

    //servico que escuta a ação de fechar do modal
    this.modalService.currentMessage.subscribe(acao => this.dialog.closeAll())

  }

  editarFazenda(fazenda) {
    //servico que escuta a ação de fechar do modal
    const dialogRef = this.dialog.open(CadastroFazendaComponent, {
      data: { fazenda, edicao: true }

    });
    dialogRef.updateSize('600px', '645px')
    dialogRef.afterClosed().subscribe(atualizarTabela => {

      // atualizar table aqui
      if (atualizarTabela != undefined) {
        this.dataSource = atualizarTabela;
      }
    })
  }

  excluirFazenda(fazenda) {
    this.dataSource.splice(this.dataSource.findIndex(x => x.id === fazenda.id), 1);
    this.dataSource = JSON.parse(JSON.stringify(this.dataSource));
    this.fazendaService.excluirFazenda(fazenda)

  }

  isTableExpanded = false;

  dataStudentsList = new MatTableDataSource();
  displayedStudentsColumnsList: string[] = ['id', 'name', 'age', 'address', 'actions'];


  toggleTableRows() {
    this.isTableExpanded = !this.isTableExpanded;

    this.dataSource.forEach((row: any) => {
      row.isExpanded = this.isTableExpanded;
    })
  }
}
const ELEMENT_DATA: Fazenda[] = JSON.parse(localStorage.getItem('fazendas')); 
