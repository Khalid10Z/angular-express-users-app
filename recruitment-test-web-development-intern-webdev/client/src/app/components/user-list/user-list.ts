import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.html',
  styleUrls: ['./user-list.scss'],
})
export class UserList {
  users: any[] = [];
  loading = true;

  @Output() userSelected = new EventEmitter<any>(); // <-- NOM de l’event

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe({
      next: (data) => { this.users = data; this.loading = false; },
      error: (err)  => { console.error('Failed to load users', err); this.loading = false; },
    });
  }

  select(u: any) {
    console.log('[UserList] emit user:', u);
    this.userSelected.emit(u); // <-- EMIT
  }
}
