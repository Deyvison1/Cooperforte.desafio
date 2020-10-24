import { Email } from './Email';
import { Endereco } from './Endereco';
import { Telefone } from './Telefone';

export class Cliente {
    id: number;
    nome: string;
    cpf: string;
    endereco: Endereco;
    telefones: Telefone[];
    emails: Email[];

    constructor()
    {
        this.emails = [];
        this.telefones = [];
    }
}