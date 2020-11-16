import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { FazendaService } from 'src/app/services/fazenda.service';
import { ListarFazendasComponent } from '../listar-fazendas/listar-fazendas.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface State {
  flag: string;
  name: string;
  population: string;
}
@Component({
  selector: 'app-cadastro-fazenda',
  templateUrl: './cadastro-fazenda.component.html',
  styleUrls: ['./cadastro-fazenda.component.css']
})
export class CadastroFazendaComponent implements OnInit {
  formulario: FormGroup;
  errosFormulario: number;
  isAddMode: boolean;


  constructor(public dialogRef: MatDialogRef<ListarFazendasComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder, private fazendaService: FazendaService) {

  }


  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      id: [0],
      nome: [null, [Validators.required, Validators.maxLength(100)]],
      proprietario: [null, [Validators.required, Validators.maxLength(100)]],
      endereco: [null, [Validators.maxLength(120)]],
      tipoMedidaArea: ['hectares', [Validators.required]],
      estado: [null, []],
      cidade: [null, [Validators.required, Validators.maxLength(80)]],
      telefone: [null, [Validators.required, Validators.maxLength(11), Validators.pattern('')]],
      email: [null, [Validators.email]],
      observacoes: [null, Validators.maxLength(200)],
      talhoes: []
    });

    if (this.dialogRef._containerInstance._config.data.edicao) {
      //editar
      this.isAddMode = false;
      this.formulario.setValue(this.dialogRef._containerInstance._config.data.fazenda)
    }
    else {
      // cadastrar
      this.isAddMode = true;

    }
  }
  getErrorCount(container: FormGroup): number {
    let errorCount = 0;
    // debugger
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
  cadastrarFazenda() {

    try {
      // incrementa id a partir da última fazenda cadastrada
      let ultimaFazenda = this.fazendaService.listarFazendas()[this.fazendaService.listarFazendas().length - 1];
      this.formulario.get('id').setValue(ultimaFazenda.id + 1);

    } catch {
      // seta id 1 caso não exista nenhuma fazenda
      this.formulario.get('id').setValue(1);
    }
    finally {
      // cadastra e reseta o formulario
      this.fazendaService.cadastrarFazenda(this.formulario.value);
      this.formulario.reset();
      this.fecharModal();
    }
  }
  editarFazenda() {
    this.fazendaService.editarFazenda(this.formulario.value);
    this.formulario.reset();
    this.fecharModal();
  }
  fecharModal() {

    this.dialogRef.close(this.fazendaService.listarFazendas())
  }

  onSubmit() {
    if (this.formulario.invalid) {
      return;
    }

    if (this.isAddMode) {
      this.cadastrarFazenda();
    } else {
      this.editarFazenda();
    }
  }
} 