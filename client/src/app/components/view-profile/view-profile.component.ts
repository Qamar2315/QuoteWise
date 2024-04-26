import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-profile',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './view-profile.component.html',
  styleUrl: './view-profile.component.css',
})
export class ViewProfileComponent {
  constructor(private authService: AuthService) {}
  onInit() {
    // this.authService.getProfile().subscribe((profile) => {
    //   console.log(profile);
    // });
  }
}
