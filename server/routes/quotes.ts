import express from 'express';
// import { getQuotes, getQuoteById, addQuote, updateQuote, deleteQuote } from '../controllers/quotes';
// import { addComment, deleteComment } from '../controllers/comments';
// import { isLogin } from "";
// import { isQuoteAuthor, isCommentAuthor } from "../middlewares/authorization";
// import { validateQuote, validateComment } from "../middlewares/schemaValidator";
import { getQuotes } from "../controllers/quotes";

const router = express.Router();

router.route('/')
    .get(getQuotes)
    // .post(isLogin, validateQuote, addQuote);

// router.route('/:id')
//     .get(getQuoteById)
//     .put(isLogin, validateQuote, isQuoteAuthor, updateQuote)
//     .delete(isLogin, isQuoteAuthor, deleteQuote);

// router.route('/:id/comments')
//     .post(isLogin, validateComment, addComment);

// router.route('/:id/comments/:cId')
//     .delete(isLogin, isCommentAuthor, deleteComment);

export default router;
