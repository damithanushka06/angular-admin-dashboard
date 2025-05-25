import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  cards = [
    { title: 'Users', value: 1245, icon: '👥' },
    { title: 'Revenue', value: '$12,340', icon: '💰' },
    { title: 'Orders', value: 278, icon: '🛒' },
    { title: 'Tickets', value: 23, icon: '🎫' }
  ];

  recentActivities = [
    'User JohnDoe signed up',
    'Order #1023 placed',
    'Payment received from Anna',
    'Ticket #203 resolved'
  ];
}
