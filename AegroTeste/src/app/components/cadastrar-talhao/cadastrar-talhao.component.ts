import { MatSnackBar } from '@angular/material/snack-bar';
import { TalhaoService } from './../../services/talhao.service';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Fazenda } from 'src/app/models/fazenda';
import { FazendaService } from 'src/app/services/fazenda.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListarTalhoesComponent } from '../listar-talhoes/listar-talhoes.component';

@Component({
  selector: 'app-cadastrar-talhao',
  templateUrl: './cadastrar-talhao.component.html',
  styleUrls: ['./cadastrar-talhao.component.css']
})
export class CadastrarTalhaoComponent implements OnInit {
  formulario: FormGroup;
  isAddMode: boolean;
  errosFormulario: number;
  constructor(public dialogRef: MatDialogRef<ListarTalhoesComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder, private fazendaService: FazendaService, private TalhaoService: TalhaoService, private _snackBar: MatSnackBar) {


  }



  fecharModal(): void {
    this.dialogRef.close();
  }

  fazendas: Fazenda[] = this.fazendaService.listarFazendas();
  @ViewChild('selectFazenda')
  private selectFazenda: ElementRef;
  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      id: [0],
      nome: [null, [Validators.required, Validators.maxLength(100)]],
      area: [null, [Validators.required, Validators.maxLength(15)]],
      fazenda: [null, Validators.required],
      colheitas: []
    });
    if (this.dialogRef._containerInstance._config.data.edicao) {
      //editar
      this.isAddMode = false;
      this.formulario.controls['nome'].setValue(this.dialogRef._containerInstance._config.data.talhao.nome);
      this.formulario.controls['id'].setValue(this.dialogRef._containerInstance._config.data.talhao.id);
      this.formulario.controls['area'].setValue(this.dialogRef._containerInstance._config.data.talhao.area);
    }
    else {
      // cadastrar
      this.isAddMode = true;
      const toSelect = this.fazendas.find(f => f.id == this.data.talhao.id);
      this.formulario.get('fazenda').setValue(toSelect);
    }
  }

  getErrorCount(container: FormGroup): number {
    let errorCount = 0;
    for (let controlKey in container.controls) {
      if (container.controls.hasOwnProperty(controlKey)) {
        if (container.controls[controlKey].errors) {
          container.controls[controlKey].markAsTouched();
          errorCount += Object.keys(container.controls[controlKey].errors).length;
          this.errosFormulario = errorCount;
        }
      }
    }
    return errorCount;
  }


  cadastrarTalhao() {
    if (this.formulario.invalid) {
      this.getErrorCount(this.formulario);
      return;
    }
    else {
      try {
        // incrementa id a partir da última fazenda cadastrada
        let ultimoTalhao = this.TalhaoService.listarTalhoesPorFazenda(this.formulario.value)[this.TalhaoService.listarTalhoesPorFazenda(this.formulario.value).length - 1];
        this.formulario.get('id').setValue(ultimoTalhao.id + 1);
      } catch {
        // seta id 1 caso não exista nenhuma fazenda
        this.formulario.get('id').setValue(1);
      }
      finally {
        // cadastra e reseta o formulario
        this.TalhaoService.cadastrarTalhaoNaFazenda(this.formulario.value);
        this.formulario.reset();
        this.fecharModal();
      }
    }
  }


  openSnackBar() {
    this._snackBar.open("Disponivel em versões futuras", "Ok!", {
      duration: 4000
    });
  }

}
