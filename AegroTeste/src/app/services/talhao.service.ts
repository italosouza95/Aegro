import { Injectable } from '@angular/core';
import { Talhao } from '../models/talhao';
import { FazendaService } from './fazenda.service';

@Injectable({
  providedIn: 'root'
})
export class TalhaoService {
  constructor(private fazendaService: FazendaService) {

  }

  cadastrarTalhao(talhao: Talhao): Talhao {
    let talhoes: Talhao[] = this.listarTalhoesPorFazenda(talhao) || [];
    talhoes.push(talhao);
    this.atualizaTalhoes(talhoes);
    return talhao;
  }
  cadastrarTalhaoNaFazenda(talhao: Talhao): Talhao {

    let talhoes: Talhao[] = this.listarTalhoesPorFazenda(talhao) || [];
    let fazendaCadastroAtualiza = this.fazendaService.listarFazendas()
    let indiceFazendaCadastro = this.fazendaService.listarFazendas().findIndex(x => x.id === talhao.fazenda.id);

    try {
      fazendaCadastroAtualiza[indiceFazendaCadastro].talhoes.push(talhao);
    }
    catch {
      fazendaCadastroAtualiza[indiceFazendaCadastro].talhoes = [talhao];
    }
    finally {
      this.atualizaTalhoes(talhoes);
      this.fazendaService.atualizaFazendas(fazendaCadastroAtualiza);
      return talhao;
    }
  }

  listarTalhoesPorFazenda(talhao: Talhao): Talhao[] {
    let indiceFazendaBusca = this.fazendaService.listarFazendas().findIndex(x => x.id === talhao.fazenda.id)
    return this.fazendaService.listarFazendas()[indiceFazendaBusca].talhoes;  //JSON.parse(localStorage.getItem('talhoes'));
  }

  editarTalhao(talhao: Talhao) {
    let indice: number = this.getIndiceTalhao(talhao);
    let talhoes: Talhao[] = this.listarTalhoesPorFazenda(null);
    if (indice >= 0) {
      talhoes[indice] = talhao;
    }
    this.atualizaTalhoes(talhoes);
  }

  excluirTalhao(talhao: Talhao) {
    let indice: number = this.getIndiceTalhao(talhao);
    if (indice >= 0) {
      let talhoes: Talhao[] = this.listarTalhoesPorFazenda(talhao);
      talhoes.splice(indice, 1);
      this.atualizaTalhoes(talhoes);
    }
  }

  private getIndiceTalhao(talhao: Talhao) {
    let fazendas: Talhao[] = this.listarTalhoesPorFazenda(talhao);
    let indice: number = fazendas.findIndex(t => {
      return t.id === talhao.id;
    });
    return indice;
  }

  atualizaTalhoes(talhoes: Talhao[]): void {
    localStorage.getItem('fazendas');
    // this.fazendaService.at
  }
}
