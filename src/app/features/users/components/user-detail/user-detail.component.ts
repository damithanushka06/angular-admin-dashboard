import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-detail',
  imports: [],
  templateUrl: './user-detail.component.html',
  standalone: true,
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {
  userId: number | null = null;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.userId = Number(params.get('id'));
    });
  }
}
