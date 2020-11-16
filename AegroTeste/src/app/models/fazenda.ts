import { Talhao } from './talhao';

export class Fazenda {
    id: number;
    nome: string;
    proprietario: string;
    tipoMedidaArea: string;
    cidade: string;
    estado: string;
    telefone: string;
    email: string;
    observacoes: string;
    talhoes: Talhao[];
}