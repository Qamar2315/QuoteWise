import asyncHandler from "../utilities/CatchAsync";
import Comment from "../models/Comment";
import Quote from "../models/Quote";
import AppError from "../utilities/AppError";
import { Request, Response } from "express";

const addComment = asyncHandler(async (req: Request, res: Response) => {
  const { qId } = req.params; // Get quote ID from request parameters
  const { content } = req.body;

  try {
    // Check if the quote with the given ID exists
    const quote: any = await Quote.findById(qId);
    if (!quote) {
      return res.status(404).json({
        success: false,
        message: "Quote not found",
      });
    }

    // Create a new comment
    const newComment = new Comment({
      content,
      user: req.user?._id,
      quote: qId,
    });

    // Save the new comment
    const savedComment = await newComment.save();

    res.status(201).json({
      success: true,
      message: "Comment added successfully",
      data: savedComment,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

const deleteComment = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params; // Get comment ID from request parameters

  try {
    // Check if the comment with the given ID exists
    const comment: any = await Comment.findById(id);
    if (!comment) {
      return res.status(404).json({
        success: false,
        message: "Comment not found",
      });
    }

    // Check if the user is the author of the comment
    if (comment.user.toString() !== req.user?._id) {
      return res.status(401).json({
        success: false,
        message: "You are not authorized to delete this comment",
      });
    }

    // Delete the comment
    await Comment.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Comment deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

export { addComment, deleteComment };
