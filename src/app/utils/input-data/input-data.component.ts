import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'fdn-input-data',
  templateUrl: './input-data.component.html',
  styleUrls: ['./input-data.component.scss']
})
export class InputDataComponent {
  @Input()
  public type?;

  @Input()
  public textoInterno?;

  @Input()
  public valorInterno?;

  @Input()
  public disabled?;

  constructor() { }

}
