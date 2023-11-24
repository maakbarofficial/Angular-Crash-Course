import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent {
  @Input() usersData: { name: string; email: string } = { name: '', email: '' };
}
