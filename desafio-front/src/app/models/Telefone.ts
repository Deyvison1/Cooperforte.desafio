import { EnumTipoTelefone } from './Enums/EnumTipoTelefone';

export class Telefone {
    id: number;
    ddd: number;
    numero: number;
    tipo: EnumTipoTelefone;   
}