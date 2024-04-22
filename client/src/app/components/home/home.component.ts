import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private authService: AuthService) {
    console.log(authService.getUser());
  }
  quotes = [
    {
      _id: '6610463a14318f5cad53d77f',
      content: 'The only way to do great work is to love what you do.',
      userPrompt: 'What do you love doing?',
      author: '6610463a14318f5cad53d77b',
      likes: [],
      favorites: [],
      comments: [],
      createdAt: '2024-04-05T18:43:06.222Z',
      updatedAt: '2024-04-05T18:43:06.222Z',
      __v: 0,
    },
    {
      _id: '6610463a14318f5cad53d780',
      content: "Believe you can and you're halfway there.",
      userPrompt: 'What do you believe you can do?',
      author: '6610463a14318f5cad53d77b',
      likes: [],
      favorites: [],
      comments: [],
      createdAt: '2024-04-05T18:43:06.223Z',
      updatedAt: '2024-04-05T18:43:06.223Z',
      __v: 0,
    },
    {
      _id: '6610463a14318f5cad53d781',
      content:
        'The future belongs to those who believe in the beauty of their dreams.',
      userPrompt: 'What are your dreams?',
      author: '6610463a14318f5cad53d77b',
      likes: [],
      favorites: [],
      comments: ['661ad1fda511f4d84d1385de'],
      createdAt: '2024-04-05T18:43:06.223Z',
      updatedAt: '2024-04-05T18:43:06.223Z',
      __v: 15,
    },
  ];
}
