import {
    HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
    StatusCodes
} from 'http-status-codes';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        catchError(
          (err: HttpErrorResponse) => {
            // add spinner check
            if (err['status'] === StatusCodes.UNAUTHORIZED) {
            } else if (err['status'] === StatusCodes.FORBIDDEN) {
            } else if (err['status'] === StatusCodes.INTERNAL_SERVER_ERROR){
            }
            return throwError(() => err);
          }
        )
      )
  }
}
