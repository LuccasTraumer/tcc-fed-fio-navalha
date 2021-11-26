import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fdn-detalhes-barbearia',
  templateUrl: './detalhes-barbearia.component.html',
  styleUrls: ['./detalhes-barbearia.component.scss']
})
export class DetalhesBarbeariaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("DETALHES");
  }

}
