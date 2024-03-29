import { Component, OnInit, ViewChild } from '@angular/core';
import { IUser } from '../../core/models/users';
import { UsersService } from '../../core/services/users.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    FormsModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css',
})
export class UsersListComponent implements OnInit {
  users!: MatTableDataSource<IUser>;
  displayedColumns: string[] = ['id', 'name', 'avatar'];
  searchText: string = '';
  filteredUsers: IUser[] = [];
  error!: boolean;

  constructor(private usersService: UsersService, private router: Router) {}
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.usersService.getUsers().subscribe((data) => {
      this.users = new MatTableDataSource<IUser>(data.data);
      this.users.paginator = this.paginator;
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim();

    if (!filterValue) {
      this.users.filter = '';
      return;
    }
    this.users.filterPredicate = (user, filter) => {
      return user.id.toString().toLowerCase().includes(filter);
    };

    this.users.filter = filterValue;
  }
  navigateToUserCard(user: IUser) {
    this.router.navigate(['/user-card', user.id], { state: { user } });
  }
}
