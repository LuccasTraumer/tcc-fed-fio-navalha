export class Endereco {
    cep: string = "";
    logradouro: string = "";
    complemento: string | '' = "";
    bairro: string = "";
    localidade: string = "";
    uf: string = "";
    ibge: string = "";
    ddd: string = "";
    numeroResidencia: string = "";
    erro?: boolean = false;
}
