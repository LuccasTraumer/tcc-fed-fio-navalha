import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CadastroServiceService {

  private requestHeader;

  constructor(private http: HttpClient) {
    this.requestHeader = {
      headers: new HttpHeaders({'Content-Type': 'application-json'})
    };
  }

  public cadastroDataNascimento(data: Date): Observable<any> {
    this.http.post(null, data).pipe(
      retry(1),
      catchError(this.handleError)
    );

    return null;
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    alert(errorMessage);
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
