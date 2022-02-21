export class Produto{
    id!: string;
    nome: string = '';
    valor: number = 0;
    custo: number = 0;
    descricao: string = '';
    ativo: boolean = true;
    idCategoriaProduto: string = '';
    codigoBarras: string = '';
    quantidadeEstoque: number = 0;
    quantidadeEstoqueCritico: number = 0;
    imagemStorageUri: string = '';
    arquivoImagem: string = '';
    nomeArquivo: string = '';
    base64: string = '';
}