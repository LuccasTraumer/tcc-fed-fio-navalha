import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fdn-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input()
  textoInterno;

  @Input()
  linkRedirect;
  constructor() { }

  ngOnInit(): void {
  }

}
