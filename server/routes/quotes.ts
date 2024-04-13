import express from "express";
// import { getQuotes, getQuoteById, addQuote, updateQuote, deleteQuote } from '../controllers/quotes';
// import { addComment, deleteComment } from '../controllers/comments';
import { isLogin } from "../middlwares/isLogin";
import { isQuoteAuthor, isCommentAuthor } from "../middlwares/authorization";
import { validateQuote } from "../middlwares/schemaValidator";
import {
  getQuotes,
  addQuote,
  getQuoteById,
  updateQuote,
  deleteQuote,
  likeQuote,
  addToFavorite
} from "../controllers/quotes";

const router = express.Router();

router.route("/").get(getQuotes).post(isLogin, validateQuote, addQuote);

router
  .route("/:id")
  .get(getQuoteById)
  .put(isLogin, validateQuote, isQuoteAuthor, updateQuote)
  .delete(isLogin, isQuoteAuthor, deleteQuote);

router.route("/:id/like")
  .post(isLogin, likeQuote)

router.route("/:id/favorite")
  .post(isLogin, addToFavorite)

// router.route('/:id/comments')
//     .post(isLogin, validateComment, addComment);

// router.route('/:id/comments/:cId')
//     .delete(isLogin, isCommentAuthor, deleteComment);

export default router;
