import { RegistroProducaoComponent } from '../components/registro-producao/registro-producao.component';
import { Fazenda } from './fazenda';
import { Producao } from './producao';

export class Talhao {
    fazenda: Fazenda;
    id: number;
    nome: string;
    area: number;
    colheitas: Producao[];
}