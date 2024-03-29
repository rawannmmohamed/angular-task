import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { IUser } from '../../core/models/users';
import { Router } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatProgressSpinnerModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css',
})
export class UserCardComponent {
  user!: IUser;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.user = history.state.user;
  }

  navigateBack() {
    this.router.navigate(['/']);
  }
}
