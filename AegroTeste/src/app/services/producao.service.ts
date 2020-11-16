import { Injectable } from '@angular/core';
import { Fazenda } from '../models/fazenda';
import { Producao } from '../models/producao';
import { FazendaService } from './fazenda.service';
import { TalhaoService } from './talhao.service';

@Injectable({
  providedIn: 'root'
})
export class ProducaoService {

  constructor(private talhaoService: TalhaoService, private fazendaService: FazendaService) {

  }


  registrarColheitaNoTalhao(producao: Producao): Producao {
    let arrayAtualizaFazendas: Fazenda[] = this.fazendaService.listarFazendas();
    try {
      arrayAtualizaFazendas[producao.fazenda.id - 1].talhoes[producao.talhao.id - 1].colheitas.push(producao);
    }
    catch {
      arrayAtualizaFazendas[producao.fazenda.id - 1].talhoes[producao.talhao.id - 1].colheitas = [producao];
    }
    finally {
      this.fazendaService.atualizaFazendas(arrayAtualizaFazendas)
      return producao;
    }
  }

  listarColheitasPorTalhao(producao: Producao): Producao[] {
    let indiceTalhaoBusca = this.talhaoService.listarTalhoesPorFazenda(producao.talhao).findIndex(x => x.id === producao.talhao.fazenda.id)
    return this.talhaoService.listarTalhoesPorFazenda(producao.talhao)[indiceTalhaoBusca].colheitas;
  }

  atualizaColheitas(colheitas: Producao[]): void {
    localStorage.getItem('fazendas');
  }
}
