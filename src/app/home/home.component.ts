import { Component, ViewChild } from '@angular/core';
import { LoadingComponent } from '../loading/loading.component';
import { HomeService } from './home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  readonly barraNavegacao = {menu: 'Home', rota: 'home', submenu: 'Tela Inicial'};
  
  // @ViewChild('loading')
  // load: LoadingComponent;

  constructor(
    private service: HomeService,
  ){ }
 


}
