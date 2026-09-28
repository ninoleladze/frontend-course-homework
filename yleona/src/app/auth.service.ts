// auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasToken());
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  
  constructor(private router: Router) {}

  private hasToken(): boolean {
    return !!sessionStorage.getItem('user');
  }

  login(token: string): void {
    sessionStorage.setItem('user', token);
    this.isAuthenticatedSubject.next(true);
  }

  logout(): void {
    sessionStorage.removeItem('user');
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/signin']);
  }

  isLoggedIn(): boolean {
    return this.hasToken();
  }

  getToken(): string | null {
    return sessionStorage.getItem('user');
  }
}
