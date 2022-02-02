import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categoria-formulario',
  templateUrl: './categoria-formulario.component.html',
  styleUrls: ['./categoria-formulario.component.css']
})
export class CategoriaFormularioComponent implements OnInit {
  barraNavegacao = {menu: 'Lista', rota: 'categoria', submenu: 'Cadastro'};
  statusForm = 'CADASTRO';

  constructor(
    private router: Router,
    private activeRouter: ActivatedRoute
  ){}

  ngOnInit(): void {
      this.activeRouter.queryParams.subscribe(param => {
        this.statusForm = param['tipo'] == 'EDITAR' ? 'EDITAR': 'CADASTRO';
        this.barraNavegacao.submenu = param['tipo'] == 'EDITAR' ? 'Editar': 'Cadastro';
      })
  }

  formulario = new FormGroup(
    {
      nomeCtrl: new FormControl('', Validators.required),
      ativoCtrl: new FormControl(true, Validators.required)
    }
    
  )

  public cadastrarOuEditar(): void {
    console.log(this.formulario.controls['nomeCtrl'].value);
    console.log(this.formulario.controls['ativoCtrl'].value);
  }



}
