import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { USER_TOKEN } from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(protected http: HttpClient, protected router: Router
  ) {
  }

  clearStorage(): void {
    localStorage.clear();
  }

  getStorageKey(key: string): any {
    return window.localStorage.getItem(key);
  }

  storeStorage(key: string, value: any) {
    window.localStorage.setItem(key, value);
  }

  getUserToken() {
    return this.getStorageKey(USER_TOKEN);
  }
}