import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../shared/model/produto-model';
import { LoadingService } from '../loading/loading.service';
import { ProdutoService } from './produto.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Categoria } from '../shared/model/categoria-model';
import { CategoriaService } from '../categoria/categoria.service';
import { Observable, ReplaySubject } from 'rxjs';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-produto',
    templateUrl: './produto.component.html',
    styleUrls: ['./produto.component.css']
})

export class ProdutoComponent implements OnInit {
    readonly barraNavegacao = {menu: 'Produto', rota: 'produto', submenu: 'Lista'};
    constructor( 
        private service: ProdutoService,
        private loadingService: LoadingService,
        private router: Router,
        private formBuilder: FormBuilder,
        private categoriaService: CategoriaService,
        private sanitizer: DomSanitizer,
        private toastrService: ToastrService
        ) { }
        
        produtos: Produto[] = [];
        categorias: Categoria[] = [];
        
        produto: Produto = new Produto();
        imagePath: SafeUrl = '';
        
        produtoForm = this.formBuilder.group({
            id!: null,
            nome: ['', Validators.required],
            valor: [0, Validators.required],
            custo: 0,
            descricao: '',
            ativo: true,
            idCategoriaProduto: '',
            codigoBarras: '',
            quantidadeEstoque: 0,
            quantidadeEstoqueCritico: 0,
            imagemStorageUri: '',
            nomeArquivo: '',
            base64: '',
        });
        
        
        ngOnInit(): void {
            this.listaProdutos();
            this.listaCategorias();
        }
        
        rota(rota:string, parametro: string, id: string | null):void {
            void this.router.navigate([rota],{ queryParams: {tipo:parametro, id: id }});
        }
        
        editarProdutoModal(id: string): void{
            const protudoEditar = this.produtos.find(produto => produto.id === id);
            if(!protudoEditar)
            return;
            this.produtoForm.controls['id'].setValue(protudoEditar.id);
            this.produtoForm.controls['nome'].setValue(protudoEditar.nome);
            this.produtoForm.controls['valor'].setValue(protudoEditar.valor);
            this.produtoForm.controls['custo'].setValue(protudoEditar.custo);
            this.produtoForm.controls['descricao'].setValue(protudoEditar.descricao);
            this.produtoForm.controls['ativo'].setValue(protudoEditar.ativo);
            this.produtoForm.controls['idCategoriaProduto'].setValue(protudoEditar.idCategoriaProduto);
            this.produtoForm.controls['codigoBarras'].setValue(protudoEditar.codigoBarras);
            this.produtoForm.controls['quantidadeEstoque'].setValue(protudoEditar.quantidadeEstoque);
            this.produtoForm.controls['quantidadeEstoqueCritico'].setValue(protudoEditar.quantidadeEstoqueCritico);
            this.produtoForm.controls['imagemStorageUri'].setValue(protudoEditar.imagemStorageUri);
            this.produtoForm.controls['nomeArquivo'].setValue(protudoEditar.nomeArquivo);
            this.produtoForm.controls['base64'].setValue(protudoEditar.base64);
            if(protudoEditar.imagemStorageUri !== null)
            this.imagePath = this.sanitizer.bypassSecurityTrustUrl(protudoEditar.imagemStorageUri);
            console.log(protudoEditar.imagemStorageUri);
        }
        
        novoProduto(): void {
            this.produtoForm.reset();
            this.produtoForm.controls['ativo'].setValue(true);
            this.imagePath = '';
        }
        
        salvarProduto(): void {
            if(this.produtoForm.getRawValue().id){
                this.atualizarProduto();
            }else{
                this.cadastrarProduto();
            }
        }
        
        cadastrarProduto(): void {
            this.loadingService.loading = true;
            this.service.cadastrarProduto(<Produto>this.produtoForm.getRawValue()).subscribe(
                {
                    next: (response:Produto)=> {  
                        console.log(response);
                        this.listaProdutos();
                        this.loadingService.loading = false;
                        this.toastrService.success('Produto cadastrado com sucesso!');
                    },
                    error: (error)=>{
                        console.log(error.error);
                        this.loadingService.loading = false;
                        this.toastrService.error('Erro ao cadastrar produto!');
                    }
                }
                )
            }
            
            keytab(event: any): void {
                var element = event.srcElement;
                var parent = element.parentElement;
                parent = parent.nextElementSibling;
                var next = parent.lastChild;
                if(next.tagName === 'INPUT')
                    next.focus();
            }
            
            atualizarProduto(): void {
                this.loadingService.loading = true;
                this.service.atualizarProduto(<Produto>this.produtoForm.getRawValue()).subscribe(
                    {
                        next: (response:Produto)=> {
                            console.log(response);
                            this.listaProdutos();
                            this.loadingService.loading = false;
                            this.toastrService.success('Produto atualizado com sucesso!');
                        },
                        error: (error)=>{
                            console.log(error.error);
                            this.loadingService.loading = false;
                            this.toastrService.error('Erro ao atualizar produto!');
                        }
                    });
                }
                
                listaProdutos(): void {
                    this.loadingService.loading = true;
                    this.service.listProdutos().subscribe(
                        {
                            next: (response:Produto[])=> {
                                console.log(response);
                                localStorage.setItem('produtos', JSON.stringify(response));
                                this.produtos = <Produto[]>JSON.parse(localStorage.getItem('produtos') || "[]");
                                this.loadingService.loading = false;
                            },
                            error: (error)=>{
                                console.log(error.error);
                                this.produtos = <Produto[]>JSON.parse(localStorage.getItem('produtos') || "[]");
                                this.loadingService.loading = false;
                            }
                        });
                    }
                    
                    handleUpload(event: any): void {
                        this.convertFile(event.target.files[0]).subscribe(base64 => {
                            console.log(base64);
                            this.produtoForm.controls['base64'].setValue(base64);
                            this.imagePath = this.sanitizer.bypassSecurityTrustUrl('data:image/jpg;base64,' + base64);
                        });
                    }
                    
                    convertFile(file : File) : Observable<string> {
                        const result = new ReplaySubject<string>(1);
                        const reader = new FileReader();
                        reader.readAsBinaryString(file);
                        reader.onload = (event) => result.next(btoa(event.target!.result!.toString()));
                        return result;
                    }
                    
                    listaCategorias(): void {
                        this.loadingService.loading = true;
                        console.log(this.loadingService.loading);
                        this.categoriaService.listCategoria().subscribe(
                            {
                                next: (response:Categoria[])=> {
                                    console.log(response);
                                    localStorage.setItem('categorias', JSON.stringify(response));
                                    this.categorias = <Categoria[]>JSON.parse(localStorage.getItem('categorias') || "[]");
                                    this.loadingService.loading = false;
                                },
                                error: (error)=>{
                                    console.log(error.error);
                                    this.categorias = <Categoria[]>JSON.parse(localStorage.getItem('categorias') || "[]");
                                    this.loadingService.loading = false;
                                }
                            });
                        }
                        
                    }
