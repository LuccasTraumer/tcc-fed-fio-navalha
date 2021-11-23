import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fdn-card-horario-agendado',
  templateUrl: './card-horario-agendado.component.html',
  styleUrls: ['./card-horario-agendado.component.scss']
})
export class CardHorarioAgendadoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() fotoBarbearia: String;

}
