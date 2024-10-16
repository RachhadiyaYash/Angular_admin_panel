import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { TokenService } from '../../../Services/token/token.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private tokenService: TokenService) {}
  userName: string = '';
  userPassword: string = '';

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.router.navigate(['/user-list']);
    }
  }

  submitLogin() {
    if (this.userName === 'admin' && this.userPassword === 'admin') {
      localStorage.setItem('user', this.userName);
      const token = this.tokenService.getTokenForUser(this.userName);
      localStorage.setItem('token', token || '');
      this.router.navigate(['/user-list']);
    } else if (this.userName === 'yash' && this.userPassword === 'yash') {
      localStorage.setItem('user', this.userName);
      const token = this.tokenService.getTokenForUser(this.userName);
      localStorage.setItem('token', token || '');
      this.router.navigate(['/user-list']);
    } else if (this.userName === 'test' && this.userPassword === 'test') {
      localStorage.setItem('user', this.userName);
      const token = this.tokenService.getTokenForUser(this.userName);
      localStorage.setItem('token', token || '');
      this.router.navigate(['/user-list']);
    } else {
      console.log('Invalid credentials');
    }
  }
}
