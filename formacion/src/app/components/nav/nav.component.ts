import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  @Input() estado: boolean;
  @Output() modificarEstado = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit(): void {
  }
  modificar() {
    this.modificarEstado.emit(this.estado);
  }
}
