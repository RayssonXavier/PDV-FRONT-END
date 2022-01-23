import { Component } from '@angular/core';
import { HomeService } from './home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  readonly barraNavegacao = {menu: 'Home', rota: 'home', submenu: 'Tela Inicial'};
  constructor(
    private service: HomeService,
  ){ }
 


}
