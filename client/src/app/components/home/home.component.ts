import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RouterLink } from '@angular/router';
import { QuoteType } from '../../types/quote.type';
import { QuoteService } from '../../services/quote.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private quoteService: QuoteService) {
    // console.log(authService.getUser());
  }
  quotes: QuoteType[] = [];
  ngOnInit() {
    this.quoteService.getAllQuotes().subscribe((res: any) => {
      this.quotes = res.data;
    });
  }
}
