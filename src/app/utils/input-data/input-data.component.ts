import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fdn-input-data',
  templateUrl: './input-data.component.html',
  styleUrls: ['./input-data.component.scss']
})
export class InputDataComponent implements OnInit {
  @Input()
  public type?;

  @Input()
  public textoInterno?;

  constructor() { }

  ngOnInit(): void {
  }

}
