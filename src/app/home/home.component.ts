import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './home.service';
import { Categoria } from './teste';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private service: HomeService,
    private router: Router
  ){ }

  ngOnInit(): void {
    this.listCategoria();
  }

  listCategoria(): void {
    this.service.listCategoria().subscribe(
      {
        next: (response:Categoria)=> {
            console.log(response);
        },
        error: (error)=>{
            console.log(error.error);
        }
      }
    )
  }

  rota(rota: string ){
    
    this.router.navigate([rota]);
  }
}
