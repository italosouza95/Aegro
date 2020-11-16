import { Component, OnInit } from '@angular/core';
import { FazendaService } from 'src/app/services/fazenda.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  visibilityChart = true;
  changeVisibilityChart() {
    if (this.visibilityChart == true) {
      this.visibilityChart = false
    } else {
      this.visibilityChart = true
    }
  }
  constructor(private fazendasService: FazendaService) { }
  dashboard;
  ngOnInit(): void {
    this.dashboard = this.gerarDashboard(this.fazendasService.listarFazendas())
  }


  podioObj = [];
  somaProducaoTotal(array, atributoName) {
    let total = 0;
    if (array && array.length) {
      array.forEach(arr => total += Number(arr[atributoName]));
    }

    return total;
  }

  ordenarFazendasProducaoTotal(a, b) {
    return (b.producaoTotalFazenda - a.producaoTotalFazenda);
  }

  ordenarMelhorTalhao(a, b) {
    return (b.producaoTotalTalhao - a.producaoTotalTalhao);
  }

  ordenarMelhorColheita(a, b) {
    return (Number(b.unidade) - Number(a.unidade));
  }

  labelsGraficoPieFazenda: string[] = []
  labelGraficoPie(labelNomeFazenda) {
    this.labelsGraficoPieFazenda.push(labelNomeFazenda)
  }
  dadosGraficoPieFazenda: number[] = []
  dadosGraficoPie(producaoFazenda) {
    this.dadosGraficoPieFazenda.push(producaoFazenda);
  }

  gerarDashboard(dados) {
    let newArray = {
      dashboard: {
        fazendas: [],
        podioFazendas: [],
        producaoTotalTodasAsFazendas: null
      }

    };

    newArray.dashboard.fazendas = dados.map(fazenda => {
      let fazendaEstruturada = {
        producaoTotalFazenda: null,
        id: fazenda.id,
        nome: fazenda.nome,
        proprietario: fazenda.proprietario,
        talhoes: fazenda.talhoes.map(talhao => {
          return {
            talhaoId: talhao.id,
            producaoTotalTalhao: this.somaProducaoTotal(talhao.colheitas, 'unidade'),
            colheitas: talhao.colheitas
          }
        })
      }
      fazendaEstruturada.producaoTotalFazenda = this.somaProducaoTotal(fazendaEstruturada.talhoes, 'producaoTotalTalhao')
      this.labelGraficoPie(fazendaEstruturada.nome);
      this.dadosGraficoPie(fazendaEstruturada.producaoTotalFazenda);
      return fazendaEstruturada;
    })

    newArray.dashboard.producaoTotalTodasAsFazendas = this.somaProducaoTotal(newArray.dashboard.fazendas, 'producaoTotalFazenda');

    let melhores = []
    newArray.dashboard.fazendas.map(podioFazenda => {
      let melhoresFazendas = newArray.dashboard.fazendas.sort(this.ordenarFazendasProducaoTotal);
      melhoresFazendas = melhoresFazendas.map((melhores, index) => {

        let talhaoMelhor = melhores.talhoes.sort(this.ordenarMelhorTalhao)[0].colheitas.sort(this.ordenarMelhorColheita)[0];


        return {
          producaoTotal: melhores.producaoTotalFazenda,
          fazendaId: melhores.id,
          fazendaNome: melhores.nome,
          icon: null,
          posicao: index + 1,
          melhorTalhao: {
            nomeTalhao: talhaoMelhor.talhao.nome,
            idTalhao: talhaoMelhor.talhao.id,
            producaoTotal: talhaoMelhor.unidade

          }
        }
      })
      melhoresFazendas[0].icon = "../../../assets/png/trophy.png";
      melhoresFazendas[1].icon = "../../../assets/png/second-prize.png";
      melhoresFazendas[2].icon = "../../../assets/png/third.png";
      melhores = [melhoresFazendas[1], melhoresFazendas[0], melhoresFazendas[2]]; // a melhor no meio

    })

    newArray.dashboard.podioFazendas = melhores


    return newArray;
  }























}
