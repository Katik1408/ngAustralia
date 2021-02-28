import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ErrorinterceptorService implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      retry(1),
      catchError((err) => {
        console.log('INTERCEPTOR');
        if (err) {
          switch (err.status) {
            case 0:
              console.log(err.statusText);
              console.log(err.message);
              console.log(err.error.type);
              break;
            case 400:
              break;
          }
        }
        return throwError(err);
      })
    );
  }
}
