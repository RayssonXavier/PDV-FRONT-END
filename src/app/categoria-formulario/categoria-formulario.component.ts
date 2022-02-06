import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoriaService } from '../categoria/categoria.service';
import { LoadingService } from '../loading/loading.service';
import { Categoria } from '../shared/model/categoria-model';

@Component({
  selector: 'app-categoria-formulario',
  templateUrl: './categoria-formulario.component.html',
  styleUrls: ['./categoria-formulario.component.css']
})
export class CategoriaFormularioComponent implements OnInit {
  barraNavegacao = {menu: 'Lista', rota: 'categoria', submenu: 'Cadastro'};
  statusForm = 'CADASTRO';
  idCategoria: string | null = '';
  categoria: Categoria = new Categoria();
  constructor(
    private router: Router,
    private activeRouter: ActivatedRoute,
    private service: CategoriaService,
    private loadingService: LoadingService,
  ){}

  ngOnInit(): void {
      this.activeRouter.queryParams.subscribe(param => {
        this.statusForm = param['tipo'] == 'EDITAR' ? 'EDITAR': 'CADASTRO';
        this.barraNavegacao.submenu = param['tipo'] == 'EDITAR' ? 'Editar': 'Cadastro';
        this.idCategoria = param['id'];
      })
  }

  formulario = new FormGroup(
    {
      nomeCtrl: new FormControl('', Validators.required),
      ativoCtrl: new FormControl(true, Validators.required)
    }
    
  )

  public cadastrarOuEditar(): void {
      if(this.idCategoria == null && this.statusForm == 'CADASTRO') {
         this.formToCategoria();
         this.tratarCadastro(
           this.service.cadastrarCategoria(this.categoria)
         );
      }
  }

  protected limparCampos(): void {
      this.idCategoria = null;
      this.formulario.controls['nomeCtrl'].setValue('');
      this.formulario.controls['ativoCtrl'].setValue('');
  }

  protected formToCategoria(): void {
    this.categoria.nome = this.formulario.controls['nomeCtrl'].value;
    this.categoria.ativo = this.formulario.controls['ativoCtrl'].value;
  }

  protected tratarCadastro(response: Observable<Categoria>): void {
     this.loadingService.loading = true; 
     response.subscribe({
        next: (response) => {
          this.loadingService.loading = false; 
        },
        error: (response) => {
          console.log(response);
          this.loadingService.loading = false; 
        }
      });
  }
  

}
