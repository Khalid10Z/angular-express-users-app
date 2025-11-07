import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserList } from '../../components/user-list/user-list';
import { UserDetails } from '../../components/user-details/user-details';

@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [CommonModule, UserList, UserDetails], // <-- important
  templateUrl: './users.html',
  styleUrls: ['./users.scss'],
})
export class Users {
  selectedUser: any = null;

  onUserSelected(u: any) {
    console.log('[Users] selectedUser =', u);
    this.selectedUser = u; // <-- met à jour la propriété liée à l’@Input
  }
}
