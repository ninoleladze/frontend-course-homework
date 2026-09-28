import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = sessionStorage.getItem('user');
  let authReq = req;
  if (token) {
    authReq = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
  }
  return next(authReq).pipe(
    catchError(err => {
      if (err.status === 400 && err.error?.error?.includes('Token expired')) {
        // kick off your refresh flow or redirect to login
      }
      return throwError(() => err);
    })
  );
};
