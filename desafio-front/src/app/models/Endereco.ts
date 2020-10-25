import { EnumUF } from './Enums/EnumUF';

export class Endereco {
    id: number;
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    uf: EnumUF;
    localidade: string;    
}