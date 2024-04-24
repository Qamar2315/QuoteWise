import { Component } from '@angular/core';
import { CommentType } from '../../types/comment.type';
import { QuoteType } from '../../types/quote.type';
import { FormsModule } from '@angular/forms';
import {
  faBookmark,
  faHeart,
  faComment
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-view-quote',
  standalone: true,
  imports: [FormsModule, FontAwesomeModule],
  templateUrl: './view-quote.component.html',
  styleUrl: './view-quote.component.css',
})
export class ViewQuoteComponent {
  commentIcon = faComment;
  heartIcon = faHeart;
  bookmarkIcon = faBookmark;
  newComment: string = '';
  quote: QuoteType = {
    _id: '1',
    content: 'This is a quote',
    userPrompt: 'This is a user prompt',
    author: {
      id: '1',
      username: 'author',
      email: 'test@gmail.com',
    },
    likes: [],
    favorites: [],
    comments: [],
    createdAt: '2021-01-01',
    updatedAt: '2021-01-01',
  };
  comments: CommentType[] = [];
  likeQuote() {}
  addToFavorites() {}
  addComment() {}
}
