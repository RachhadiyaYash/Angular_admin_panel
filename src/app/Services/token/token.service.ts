import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private userTokens: { [key: string]: string } = {};

  constructor() {}
  getTokenForUser(userName: string): string {
    if (!this.userTokens[userName]) {
      this.userTokens[userName] = this.generateToken(userName);
    }
    return this.userTokens[userName];
  }

  private generateToken(userName: string): string {
    const token = btoa(`${userName}-${new Date().getTime()}`);
    return token;
  }

  verifyToken(token: string): boolean {
    return Object.values(this.userTokens).includes(token);
  }
}
