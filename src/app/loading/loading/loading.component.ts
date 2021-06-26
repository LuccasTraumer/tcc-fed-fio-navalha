import { Component, OnInit } from '@angular/core';
import { ConstantesIcons } from 'src/app/utils/constantes.icons';

@Component({
  selector: 'fdn-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  pathImage = ConstantesIcons.LOGO_ICON_PNG;

  constructor() { }

  ngOnInit(): void {
  }

}
