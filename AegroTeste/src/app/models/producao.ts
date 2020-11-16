import { Fazenda } from './fazenda';
import { Talhao } from './talhao';

export class Producao {
    id: number;
    dataColheita: Date;
    unidade: string;
    umidade: number;
    producaoBruta: number;
    producaoLiquida: number
    talhao: Talhao;
    fazenda: Fazenda;
}