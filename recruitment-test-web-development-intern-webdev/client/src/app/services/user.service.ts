import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// (optionnel) petit modèle pour t'aider dans l'auto-complétion
export interface Address { street: string; city: string; country: string; }
export interface User {
  id: number;
  firstname: string; lastname: string;
  gender: string; email: string;
  phone: string; cell: string;
  address: Address;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private apiUrl = 'http://localhost:3000/users'; // backend Express

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
}
