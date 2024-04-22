export interface QuoteType {
    _id: string;
    content: string;
    userPrompt: string;
    author: string;
    likes: string[];
    favorites: string[];
    comments: string[];
    createdAt: string;
    updatedAt: string;
}