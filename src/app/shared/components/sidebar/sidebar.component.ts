import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
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


}
