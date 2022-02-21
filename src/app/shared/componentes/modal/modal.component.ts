import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  animations: [
    trigger('overlay', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('250ms', style({ opacity: .5 }))
      ]),
      transition(':leave', [
        animate('250ms', style({ opacity: 0 }))
      ])
    ]),
    trigger('modal', [
      transition(':enter', [
        style({top: -999}),
        animate('500ms', style({top: '50%'}))
      ]),
      transition(':leave', [
        animate('500ms', style({top: -999}))
      ])
    ])
  ]
})

export class ModalComponent implements OnInit {

  mostrar: boolean = false;
  ocultarNoOverlay: boolean = false;

  // constructor(@Inject('ocultarNoOverlay') ocultarNoOverlay: boolean) {
  //   this.ocultarNoOverlay = ocultarNoOverlay;
  // }

  toggle () {
    if(!this.ocultarNoOverlay && this.mostrar) {
      return;
    }
    this.mostrar = !this.mostrar;
  }

  ngOnInit(): void {
      
  }

}
