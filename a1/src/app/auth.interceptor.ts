import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, throwError } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = sessionStorage.getItem('user');
    let authReq = req;
    if (token) {
      authReq = req.clone({
        setHeaders: { Authorization: `Bearer ${token}` }
      });
    }
    return next.handle(authReq).pipe(
      catchError(err => {
        if (err.status === 400 && err.error?.error.includes('Token expired')) {
          // kick off your refresh flow or redirect to login
        }
        return throwError(() => err);
      })
    );
  }
}
