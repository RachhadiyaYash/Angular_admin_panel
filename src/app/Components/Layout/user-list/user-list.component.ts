import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../../../Services/User/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['userId', 'title', 'body'];
  users: User[] = [];
  paginatedData: User[] = [];

  currentPage: number = 1;
  rowsPerPage: number = 10;
  totalPages: number = 0;
  pageSizeOptions: number[] = [5, 10, 15, 20];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((posts) => {
      this.users = posts;
      this.totalPages = Math.ceil(this.users.length / this.rowsPerPage);
      this.paginate();
    });
  }

  onRowsPerPageChange(): void {
    this.currentPage = 1;
    this.totalPages = Math.ceil(this.users.length / this.rowsPerPage);
    this.paginate();
  }

  paginate(): void {
    const startIndex = (this.currentPage - 1) * this.rowsPerPage;
    const endIndex = startIndex + this.rowsPerPage;
    this.paginatedData = this.users.slice(startIndex, endIndex);
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginate();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.paginate();
    }
  }
}
