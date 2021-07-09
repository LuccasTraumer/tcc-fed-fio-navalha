import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CadastroServiceService {

  private requestHeader;
  private http: HttpClient;

  constructor() {
    this.requestHeader = {
      headers: new HttpHeaders({'Content-Type': 'application-json'})
    };
    this.http = new HttpClient(null);
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
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    alert(errorMessage);
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
