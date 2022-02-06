import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-aviso',
  templateUrl: './modal-aviso.component.html',
  styleUrls: ['./modal-aviso.component.css']
})
export class ModalAvisoComponent implements OnInit {

  abrir = '';

  constructor() { }

  ngOnInit(): void {
  }

  toogleModal(): void {
    this.abrir = 'show';
  }
}
