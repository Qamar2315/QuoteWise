import express from "express";
import { addComment, deleteComment } from '../controllers/comments';
import { isLogin } from "../middlwares/isLogin";
import { isCommentAuthor } from "../middlwares/authorization";
import { validateComment } from "../middlwares/schemaValidator";

const router = express.Router();

router.route('/:qId')
    .post(isLogin, validateComment, addComment);

router.route('/:id')
    .delete(isLogin, isCommentAuthor, deleteComment);

export default router;
