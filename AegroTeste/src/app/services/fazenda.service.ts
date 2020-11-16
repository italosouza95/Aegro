import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fazenda } from '../models/fazenda';
@Injectable({
  providedIn: 'root'
})
export class FazendaService {
  constructor() {

  }

  cadastrarFazenda(fazenda: Fazenda): Fazenda {
    let fazendas: Fazenda[] = this.listarFazendas() || [];
    fazendas.push(fazenda);
    this.atualizaFazendas(fazendas);
    return fazenda;
  }

  listarFazendas(): Fazenda[] {
    return JSON.parse(localStorage.getItem('fazendas'));
  }

  editarFazenda(fazenda: Fazenda) {
    let indice: number = this.getIndiceFazenda(fazenda);
    let fazendas: Fazenda[] = this.listarFazendas();
    if (indice >= 0) {
      fazendas[indice] = fazenda;
    }
    this.atualizaFazendas(fazendas);
  }

  excluirFazenda(fazenda: Fazenda) {
    let indice: number = this.getIndiceFazenda(fazenda);
    if (indice >= 0) {
      let fazendas: Fazenda[] = this.listarFazendas();
      fazendas.splice(indice, 1);
      this.atualizaFazendas(fazendas);
    }
  }

  private getIndiceFazenda(fazenda: Fazenda) {
    let fazendas: Fazenda[] = this.listarFazendas();
    let indice: number = fazendas.findIndex(f => {
      return f.id === fazenda.id;
    });
    return indice;
  }

  atualizaFazendas(fazendas: Fazenda[]): void {
    localStorage.setItem('fazendas', JSON.stringify(fazendas));
  }
}
