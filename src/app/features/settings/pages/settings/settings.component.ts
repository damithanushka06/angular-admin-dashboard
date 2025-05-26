import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  profile = {
    username: 'john_doe',
    email: 'john@example.com',
    notifications: true,
  };

  saveSettings() {
    console.log('Settings saved:', this.profile);
    // Implement save logic (API call etc.)
  }
}
