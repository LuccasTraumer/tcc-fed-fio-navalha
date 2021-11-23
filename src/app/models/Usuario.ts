import { Endereco } from "./Endereco";

export class Usuario {
  nome: string;
  email?: string;
  telefone?: string;
  tipoCliente: string;
  fotoPerfil?: string;
  senha: string;
  dataNascimento: Date;
  endereco: Endereco;
}
