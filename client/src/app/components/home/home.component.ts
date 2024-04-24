import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RouterLink } from '@angular/router';
import { QuoteType } from '../../types/quote.type';
import { QuoteService } from '../../services/quote.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBookmark,
  faHeart,
  faComment,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(
    private quoteService: QuoteService,
    private authService: AuthService
  ) {}
  commentIcon = faComment;
  heartIcon = faHeart;
  bookmarkIcon = faBookmark;
  quotes: QuoteType[] = [];

  ngOnInit() {
    this.quoteService.getAllQuotes().subscribe((res: any) => {
      this.quotes = res.data;
    });
  }
  isLogin(){
    return this.authService.isAuthenticated();
  }
}

