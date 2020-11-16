import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Fazenda } from 'src/app/models/fazenda';
import { Talhao } from 'src/app/models/talhao';
import { FazendaService } from 'src/app/services/fazenda.service';
import { ProducaoService } from 'src/app/services/producao.service';
import { TalhaoService } from 'src/app/services/talhao.service';

@Component({
  selector: 'app-registro-producao',
  templateUrl: './registro-producao.component.html',
  styleUrls: ['./registro-producao.component.css']
})
export class RegistroProducaoComponent implements OnInit {
  talhoes: Talhao[];

  formulario: FormGroup;
  errosFormulario: number;
  fazendas: Fazenda[];
  constructor(private formBuilder: FormBuilder, private fazendaService: FazendaService, private talhaoService: TalhaoService, private producaoService: ProducaoService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    let hoje = new Date().toLocaleDateString()

    this.formulario = this.formBuilder.group({
      id: [0],
      dataColheita: [hoje],
      unidade: [''],
      umidade: [0],
      producaoBruta: [0],
      producaoLiquida: [0],
      talhao: [null, Validators.required],
      fazenda: [null, Validators.required]
    });
    this.fazendas = this.fazendaService.listarFazendas();
  }
  selecionouFazenda(fazenda) {
    if (this.fazendas.length === 1) {
      this.talhoes = this.fazendas[0].talhoes;
    }
    else {
      this.talhoes = this.talhaoService.listarTalhoesPorFazenda(fazenda.talhoes[0]);
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


  registrarColheita() {
    if (this.formulario.invalid) {
      this.getErrorCount(this.formulario);
      return;
    }
    else {
      try {
        // incrementa id a partir da última fazenda cadastrada
        let ultimaColheita = this.producaoService.listarColheitasPorTalhao(this.formulario.value)[this.producaoService.listarColheitasPorTalhao(this.formulario.value).length - 1];
        this.formulario.get('id').setValue(ultimaColheita.id + 1);
      } catch {
        // seta id 1 caso não exista nenhuma fazenda
        this.formulario.get('id').setValue(1);
      }
      finally {
        // cadastra e reseta o formulario
        this.producaoService.registrarColheitaNoTalhao(this.formulario.value);
        this.formulario.reset();
      }
    }
  }
}
