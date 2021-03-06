import { Perfil } from './../../../models/Perfil';
import { Component, OnInit } from '@angular/core';
import {BuscarDadosClienteService} from "../services/buscar-dados-cliente.service";
import {isEmpty, take} from "rxjs/operators";
import {Usuario} from "../../../models/Usuario";
import {Router} from "@angular/router";

@Component({
  selector: 'fdn-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})

export class PerfilComponent implements OnInit {
  public primeiraVez: boolean = true;
  public switchType: string = 'number';
  public valorComMascara: string;
  public opcao = 0;
  public perfil = new Perfil();

  public isValido: boolean = false;

  public valor: boolean = true;

  usuario: Usuario;

  pathImg = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVFRYVGRgaGhwcGRgZGBgaGBwcGBoZGRgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHDQsISs0NDQ0NDQ0NDQ0NDY0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAQ4AugMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAABAUGBwECAwj/xABFEAACAQIDBQYDBQQIBAcAAAABAgADEQQSIQUGMUFRByJhcYGRE6GxMkJSwdFicoKSFCNTY6KywuEVc7PwJDM0Q3SDo//EABkBAQADAQEAAAAAAAAAAAAAAAACAwQBBf/EACMRAAICAwACAgIDAAAAAAAAAAABAhEDITESIkFRBGETMoH/2gAMAwEAAhEDEQA/ALmhCEAIQhACEIQAhCEAIQkf2rvjgcNcVcRTDD7qnM3C9rLeAP8ACQjD9qOzXYL8R1v95qbBfUyWYDaFKuuejUSovVWDD1twnLOuLXULIQhOnAhCEAIQhACEIQAhCEAIQhACEIQAhCEAIQhACYmYmxyZqbgXuUYC3HUHhAKR343zr4qq9OhUKYZSVGQ2apa4LM3HKeQ9ZF8BgqYOqgnqdfrODuA5uQBf0nanXXkRMzk309OEIJUkSGhhUtbKLeQmi1KuBb+kYRijLq6fcdeasvDlx4xlO8OXRVzHzsI77J2qKwKvl100PUcDeRVx2RklK0y691NvJjcMmIQWzXDL+FlNmX8/IiPUpjspxTYTG1MEx7lZS9In8SAmw8Sma/7glzTUnaMEo+LozCEJ0iEIQgBCEIAQhCAEIQgBCEIAQhCAEIQgBMTMIB5d3w2d/R8ZiKNvs1GK34ZG76f4WAiDA4Usw6acOvMSY9peIb/idUNTCWRAp1/rFA+3rxOuX+CMDYlVAIFwNbDwmbI2tI9HDTSkPabsUnQcQTwInDZuxfhOQ+Ui9xYc+Rv68Jrht6qjFUVEA6nUD2jw9QHgwzEcP0vKZeS1ZZ3bOuKBRqWIp2z0WzDS+liGFufHh4Sd9nu9rY5HWrl+Klm7ugZG+ybdQbgjy6yC072sTxH1j52U7LqUq9c1KdSnkRU76kZixuSrcGH9WOH4hLcMpXRRnjFxbfS04QhNRhCEIQAhCEAIQhACEIQAhCEAIQhACEIQAhCEArztf3fOIwq16aZqtBs2guxpkEOotxscrfwmUbisyXUgqwYq6nQhlJDKRyNxPWkqbtc3PTI+PpEKwy/GTk9yEDr0YXFxzHjxjJXsuxTa9fsqfCgsAWdVXn19otRlV1yVne2up0HleMhsDci4nShXXNwsLyuStaNSmrSkWHhsVnC+MuLdvGfFoIea91vNf1FjKA2ZjgxB4W4Dw6yz9ydrhKnw2PdqaDoHHD3GntK8bqRXmjcSx4TEzNRjCEIQAhCEAIQhACEIQAhCEAIQhACEIQDEIi2ltOjQXPWqKi9WNvYcT6SJNv8ArWYpg6ZcD7VapdEH7q/aY+05aO06smeJxSU1zOwUeP0HWUd2h74ti6hooCtGmx0PF3FxmbwHIeclmPr1arBqjFjy5AeQGglU7x4OtTr1C6kKzMwa2hBJPGQndFn49OWxiN7aTVlJ8o54bC3AJ1F+Aig7OOoAtfgPylf8iRueJPrOGySc3hoPaTTDVyQqLqxIAA43jXsrdnEvbIlh1I0libtbrLQIeowdxw0sF8pDxcpWuFeWcYruyVbDqNSpU6bkswHeYkkknUi56Xt6RZtHai0qTVcrME1YLa9uZ16RAoEzWph0ZDwYFT5EWmnipHn3u2a7P30wlX75Q9HFvnwj9RxCOLqysOoIP0nnanUdHdW+67LbyNo54baTJqjFT1UkfSVLM11Gl4V8MvyYlUbI33r02GdviJzDWzAeDfrLQwmIWoiuhurAMD4HWWRmpcKZQceiiEISZEIQhACEIQAhCEAxOGMxK0qb1HNlRWZj0VQWJ9hO8jPaJWK7OxJXiaeX0dlRvkxhnUrdFB7d2tUxVV61RiWdiVBvZFP2UUcrCw0lk7s7N+BQRD9q2Zv3m1Ptw9JXO7uF+LiaaHUBszeSd63yA9ZbKNc3lUFeyzO6qKOhEytuBVWB4qwBHzmuaF5YZztRwmG/sKQ8lAiqjhaKm606YPUKL+8bw1p2SpHivol5y+x1LiBeIkqTY1IoiK88ytSIjVmhxVrnpr7RQKm3jfJiawH9ox9zf843JjDMY7Gmq7u3Fnc+XeNh7RJMz/sz01GoodsLjtbSzuzDbBLNhTquUuh6WKhl8je/vKfwz96WF2YgtjltwWk7Hy7i/VhEdSVFeRXFl0QhCajGEIQgBCEIAQhCAYjTvRgvjYPEUrAl6TgX/FlJU+jWPpHacMZVCI7Hgqsx8gCTB1dPOW5BAxOb+7f6rLKonSVhutWBxN+GYPYdL2YD5Sy8Oe7IQ4Tz/wBhReYZrQnGu0kVHX4k2DxvzGBqGdIjiK1pk4iN6POb1jOgXVsXbnOYxAOZfD6xkxOI0MRJtG4DDWws36yQIzt/Yr0HZ071IknxW+pv4RmrVeksT/zUIIBuCrDqDpeVtVUB2UG4VmA8gSBKZwV2bcE2/VmKWa9xeWZ2QYsLjSr6FqLKh6nNTe3sh9pAcIwAj9sbaBoYijVHFHQ+a3s49VJEp8vZF04erR6QhMAzM0nnhCEIAQhCAEIQgGIy741cmBxTcLUKtvMowHzIj1Ib2sYnJsyvx72RBb9p1/Qwzq6UHsfFBMRTYcMwB8joT7GW5hHuJSCtYgiWvsLEkolzxA+kjFUWZt0yRXietOymcK0kZzlObGbmc2nUDLcIjxNSwil3sI24lrmdQEVeoRGsVCj5hwPER1roYgq4c30nUdQ5YN9CUvoCbc+Erg1L6nidT5nUyxMBTKn0MrbUacxce0hPZdil4tiyhVsY4VKhtccRqPSM1Jo6YNgSAZlyRp2ehCXlE9R7NrB6VNwQQyK1xw1UGKoy7mn/AMDhf/j0v+msepqR5jVOjMIQg4EIQgBCEIASK9pWE+JszFCwJWnnF+XwyHJHjZTJVI/vxUVdnYwsQB/R6ouerIyqPMsQPWAeWC0sndTEA0KZ5gAfy6flK2FMngJK9z8QQWpNp95fzE4mkyyUZNXRZqOCNIVFvEOGexHjpHEGSKBE2k0cxVWSI3gHCs0SOsVOdZhkvOoDe5mLeEVtRE0poWNgNOs6Dir5dZAd4NnPh8Q6OrLc51vzV+8pHhb6GWVgdnfFxFKiLnM4DW5INXP8oMlfapuqmKwjVFFq2HQshAuWRRdqZ8LC48R5yLJxdbPPIMWYZ7G8Q00Jj1srZxdlvwuL+XOUZGktm78e3utHpjdqjkwmHX8NGmPZFjrOOHChVC/ZCi3lbT5TrLVwxN7MwhCdOBCEIAQhCAYtKd7Z95iWGz6fAZWrHxPeRPazHzWWltvaaYWhUxFT7NNSx6k8AB4kkD1nmLF498RVqV6hu9RizdNeQ8ALD0kJukW4Y3K2c6WHIF4owOYOhXjmFpqj30jpsCgWrppcC7HwAU2P82WZ4tuVG2dKDf6JvhRbLzN45iJcNTsAYpmw8oy4iCqNYuYxE3GAJXpm86pTnUibhNJ0HI0BOTggd2Km4TmjCAOu4OEzYl6h+4hF/FyAPkGk13hxQpYWvUa1lpOTcXGinQjnI12e/br+SfV4k7aNoGns/wCGDY1qip5hbudeWqrIsnFWUPhadyBJlspABYdJD8M9pKtl1xYTHluz1FqNIvjdjE/EwtFr3ORQfNe63zBjtIZ2b4zNRqUuaNf0qXI+atJnNMHcUzzZqpNGYQhJkQhCEAIQhAKw7csUy4SjTBsHq94dQqkj5kH0lK4caS1e3tu9gx4V/rRlU0JVkNeBeorpLLH3N2Cwwr4trgFgqA80BszD+IgfwyG7sbIbGYhKC/eN3P4UW2dvO3DxIl6b0ZMNs9wi92mihVHE2ZcoHjeQxRt2x+ROl4r5IqYXka2fvKlQa91gbFW0PnHNsctuImqjCLKtWclItEgxKnnOqOCLzgNc5vFSubRCagvHCkV9p0GcpI4TQ0SAdJ2fGoi5iRYRpxG1M5smZjyRFJb1tw9YC/RMez77VceCfV5Fu3tmthBrkvVJ6ZgKeX1sW+ck/Z5SqK1X4tMoWClASCSqk3Jtw1YRt7c8PmwVJvw1h/iRhIPhZDqKMSP2y31EYEMetmHUTLl4enCqLc7Lr/FrHlkT/M3+8smQHsqoH4VaryZgoH/LBufUv8pPpfiVQRgzP3ZmEISwqCEIQAhCEAoftvxWbG06evcojTld2Ym3oq+0rxAZKO0nH/H2nXI4Iwpj/wCsZW/xZptuVsD+mYpKRHcBzVemReIv1PD1lUnujdiqMLZaHZLu8cPhjXqKBUrkMOop2GRTfgSbm3iIk3+2gz1/hqe7TABXlmYBifYgSx9FXoAPYATzBit7a1TEVKp7wqOxCniAzd0DpYWEsSpUYpycm2SGvQov9tLN1Gn0nJ9kUzfLUYDziKjvBSBIqjKwNu7cr7zthtp4dzo4B6MCJ2mQs6f8Pdf/AHvLS8WJSq20qp6gzOGxVFgcrBiBfTXjwmXxahWfKcoGuo08bRsWdaOFqAgmpT+ZixtmO/HEAA2vlH+8YqW3sMbXe19OB08+n+8Xrt/DopIYsqkBmUXAzcLxsWPeD3conR3epbgL2XS9uHGSLD0kpIVRUQW1sBw85AavaHRX7CM3pa/vI1tnfPEV/vFF5KhI08W5+k419nUmy0xvdh6FeihdSxqKjWN8q1GCEt0Avf0j92p4U1NmYkKASoV9eQpursR45Q080PULHnx0AnpjdbFHG7JTMQzPQam9+bqpQlvEkXPnO1o6lR5rWPOzwdIzU9bR6w3dW/PgJmy8PRxbRfvZvSK4CkSLZy7DyZzlPqLGSqNu7+F+FhaFP8FJF9lAjlL4qkkYJO5NmYQhJEQhCEAJo7WBPQX9pvI5v1tlcJga1UsA5UpTvzqOCEAHO2p8lMA844rF/GxFWr/aVHf+dy35y7Ox/ZqphnrjVqj5Sb8qdwB4as0p3dJaIrA18hQKSFf7LNwUHw4n0ly7g45BahTdDZixVLWseoA01vK1HdmjJOoKJJt8sUaWBxTjiKLgctWUqD7meWBhmUi48R4+XsZ6D7Y9oCns8pchqroi26Kc7HyslvWUKwOUMGIN+7rwAv8AqZojG1Zlbp0N7tck9Zi8WDC2FyLjqJyNDxknil0KaHHYGJYF6a2u401tqL6A+vyiKrTrKCGDgc73t6mbUMObBgSDrqNCCP8AsTbF5wLs7NfS2Yn3Ej/HKrHkroQXizA1yMya2dcpHjxU+/1nJaF7a2vO1KgdGXipB163kliktnHJcE7UWHEHW/LobH5xwwGxKlQ6gqOpjvst6gDPdS5JJFr91gM4A66A+kXNiWdQM2ngLXko4kVyzPiEZ2PSVFKZmdGu7j7IXlbxvLJ7Ido5DiMKSMgtXRide/3XHl3QfUyDYSqFzUuJdSAB15Hz/WaVUqYNGxHxFWtkNLINTlqKVOY8rA38xJTS8aI45NyIlVdS7FBZSzFR0UkkD2tH7YlE1a1GmLXd0UX4XZgLmRynJd2eIG2jhg3DPe3iqMw+YE86UbaPZg6g2ekxMzEzLzzwhCEAIQhAMSpO3bF93DUerNUPTugKP85ltyje3OoxxVFSLKKN1PUs7ZrHwyp7zj4Txr2K6wz/ANYtgDZectzsgpZq1aoQOCqLD8IZj/nEq3Yq52LEcAF4dBLt7K8KFpOwFrsfllH+mFpUcm7lZHu3DaC58PhytyqtVNzoMxKL5/Yf2lR13LG1rDkB8pYHbHiQ+0SAR3KKJ5G7vr/PK+vrNWOOkUSeztRqsuhNxbhMkA8NfCcKrW15zrSAOt/aXlbXyd9nkkMDYZTfXx0M47QpFQbjiRY8ptgmJL9SPmJvjTekCb3DWsZW+M7yZxoLcC4A04zoaumUcJz1IGo05TSme9bpLEcau2LsDimT7OvA+0eqCI5zd+mTqctit/KMQfWPeyql7A8Os7KPyVSY9YSitNS6AKFHeduNutzwkR29tMVnITRBz5sR94+5j7vNWJpJTBtna58lF9fl7SLoi3sOXOYs+WvU3/iYFJeb/wAOFJJLdy6y0sRRrgapUW46h+4beNmMj9OhY3i6jXKZMuhLZvbhMLlb0elS8fE9QzMSbOxIq0qdQcHRW/mUH84rmo8wIQhACEIQDEYd7N2qWPomlUFmGqOB3lbqOo6iP05Yh8qs3RSfYEwdTraPOO7uFyZ10NqjC/7hy/lLq7PKOXCKfxFj7szD5NKS2PiGyFidWzMfNiWP1l/bqUMmFpL+yJw4+lBdpbX2niv31HtTSRIcRHvefEfExmJY/er1DfwzsB8rRmy6iboaSKr2zLCFFjZlHn7TFaaHTUSYStG+EqFW0Nr6TrUxBZWB4/pEnAgxQ3HMBYNp4ajWVrjR1pXZjDvoR4TnSOs1pta/laZpmdi9INdFoPAxwwb6iNoGgi3DcvrLjLNaFu2sYe5axIVvS9h+UQ1cHlwyVSO89RgD+yF/UGLjhEdlLsAi6tbiQLnjyEN4dp06iUqVO2VDpbgBbKBMGaNSbl88PQwzuMYx+OjfVq5bc4Ji7uCeFiPlOWIQ3C3uZJdxtza+LxKFkZaCMr1HdWVWVSDlW/2i3DyuZjjBM2zmki9t0abLgsMrfaFCncHkci6R5gBCaDC3bszCEIOBCEIARi30xGTAYtr2Iw9UAjiCyMq/MiPshfaziSmy69vvlE9GdQflAKc2QFKogPHKvvYfnPR2AS1NB+yPnrPOm6lMtiKC24uP8ILflPSKCwA8IB5V3hTLicSp5Vqg9naNgOskPaBRybRxS/3rN/PZ/wDVI8BN0OFPDDiaG83c2nImTOowwmuYjnNrTUrKZxb2iaMgzblpMFCLEg2PA8jbjYzK2iLDFdJtLRXRqGIaMUU9JeuGaaHekwy26/8AdjEow6BtUH0HtN8Ox9Jzc3JkJRT6QhKS4xVQREqK2UABlY/wsG/KemqLAqpFrEAi3CxGlp5fL8+k9Jbua4TDH+4pf5FmbNFJKjRik3djpCEJSXBCEIAQhCAErLtyxFsJQp3IL4hWtyKoj3B9WU+ks2J8Tg6dQAVERwNQGUMAeouIBQ/Z3hs+Npfsh2+QT/X8p6AiWhgKSapTpoeqqo+giqAeaO05bbUxPiyH/wDNJFryYdrFPLtOt4hD7oP0kMabIPSKmtmtRrmagTK8ZnkZaSNbzognKKMMtzInJaVl64TchMVsahQdQlbJ8RHsLq7kuMx6EEA/7Shq1JkZkYFWRirA8QymzA+RBnrvAqBTQDgFUDyCiUN217GShjVrLwxClmXo6WVj6gg+d+syRl7E/ggFIxUjaxBTOsVoZti9FE4jjTqWmp43mlMwveJFEenYHUeInpbdv/0mG/5FL/prPMtMXZR10nqXB0glNEHBVVR5AACZc/EaMPyKIQhKC8IQhAP/2Q==';

  constructor(
    private service: BuscarDadosClienteService,
    private router: Router
    ) {}

  ngOnInit() {
    const usuario = sessionStorage.getItem('jwtUser');

    const tipoCliente = JSON.parse(usuario).tipoCliente.toLocaleLowerCase().split('.')[4];
    const email = JSON.parse(usuario).email;
    this.service.buscarDadosCliente(email, tipoCliente)
      .pipe(take(1))
      .subscribe(resp => {
        this.usuario = resp;
        if (Object.keys(this.usuario.fotoPerfil).length === 0)
          this.usuario.fotoPerfil = '../../../../../assets/images/Pessoas/pessoaPerfil9.jpg';
      }, error => {
        console.error(`Erro ao tentar buscar cliente com email: ${JSON.parse(usuario).email}`);
        this.router.navigate(['/login'])
    });

  }

  escolherPerfil() {
    this.perfil.nome = 'Pedro'
    this.perfil.tel = 9999999999
    this.perfil.ddd = 19
    this.perfil.rua = 'Alberto belintani'
    this.perfil.numeroRua = 133
    this.perfil.email = 'pedrocandido@gmail.com'
    this.perfil.bairro = 'Jardim Colonial'
    this.isValido = false;
    this.primeiraVez = true;
    this.switchType = 'number';
    this.opcao = 0;
    // console.log(this.usuario)
  }

  escolherConfiguracao() {
    let container = document.getElementById('text') as HTMLDivElement;
    let modo = 'to do'
    let idioma = 'to do'
    this.isValido = false;
    this.primeiraVez = true;
    this.switchType = 'email';
    this.opcao = 1;
  }

  public enviarCodigo(): void {

  }

  public onSubmit(): void {
    //this.emailCadastrado.emit(`${this.switchType}: ${this.valorInput}`);
  }

  sairAplicacao() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
