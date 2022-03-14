import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styleUrls: ['./siderbar.component.css']
})
export class SiderbarComponent implements OnInit {

  @Input() estado: boolean;
  
  constructor() { }
  ngOnInit(): void {
  }
}
