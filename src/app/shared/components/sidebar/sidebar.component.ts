import { Component } from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [
    RouterLinkActive,
    NgForOf,
    RouterLink
  ],
  standalone: true
})
export class SidebarComponent {
  menuItems = [
    { label: 'Dashboard', route: '/dashboard' },
    { label: 'Users', route: '/users' },
    { label: 'Settings', route: '/settings' },
  ];

  constructor(private router: Router) {}

  onMenuClick(item: { label: string; route: string }) {
    console.log('Clicked:', item.label);
    this.router.navigate([item.route]).then(r => {});
  }

}
