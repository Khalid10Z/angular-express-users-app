import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-details.html',
  styleUrls: ['./user-details.scss'],
})
export class UserDetails implements OnChanges {
  @Input() user: any; // <-- le nom DOIT être "user"

  ngOnChanges(changes: SimpleChanges) {
    if (changes['user']) {
      console.log('[UserDetails] @Input user changed:', this.user);
    }
  }
}
