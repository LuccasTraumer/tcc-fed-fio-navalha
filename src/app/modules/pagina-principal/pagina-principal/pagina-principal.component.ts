import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fdn-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.scss']
})
export class PaginaPrincipalComponent implements OnInit {

  title: string = 'AGM project';
  latitude: number;
  longitude: number;
  zoom:number;

  constructor() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;
      });
    }
  }

  ngOnInit(): void {
  }

}
