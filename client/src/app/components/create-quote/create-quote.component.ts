import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-quote',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './create-quote.component.html',
  styleUrl: './create-quote.component.css',
})
export class CreateQuoteComponent {
  userPrompt = 'This is default prompt';
  quote = 'Test Quote';
  generateQuote() {
  }
  uploadQuote() {
  }
}
