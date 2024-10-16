import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule, RouterOutlet],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  userName: string | null = null;
  sidebarOpen: any;
  isDropdownOpen: boolean = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  constructor(private router: Router) {}

  ngOnInit() {
    this.userName = localStorage.getItem('user');
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
  logOut() {
    localStorage.removeItem('user'), localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
