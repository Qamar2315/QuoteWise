import asyncHandler from "../utilities/CatchAsync";
import Quote from "../models/Quote";
import User, { UserModel } from "../models/User";
import AppError from "../utilities/AppError";
import { Request, Response } from "express";

const getQuotes = asyncHandler(async (req: Request, res: Response) => {
  // Fetch all quotes from the database
  const quotes = await Quote.find({});

  if (quotes) {
    res.status(200).json({
      success: true,
      data: quotes,
    });
  } else {
    throw new AppError("Internal Server Error", 400);
  }
});

const getQuoteById = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params; // Get quote ID from request parameters

  // Fetch the quote from the database using the ID
  const quote = await Quote.findById(id).populate("user", "username email");

  if (!quote) {
    return res.status(404).json({
      success: false,
      message: "Quote not found",
    });
  }

  res.status(200).json({
    success: true,
    data: quote,
  });
});

const addQuote = asyncHandler(async (req: Request, res: Response) => {
  const { content, userPrompt } = req.body;

  // Check if required data is present
  if (!content || !userPrompt) {
    return res
      .status(400)
      .json({ success: false, message: "Content and userPrompt are required" });
  }

  try {
    // Create a new quote
    const newQuote = new Quote({
      content,
      userPrompt,
      author: req.user?._id,
    });

    // Save the new quote
    const savedQuote = await newQuote.save();

    res.status(201).json({
      success: true,
      message: "Quote added successfully",
      data: savedQuote,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

const updateQuote = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params; // Get quote ID from request parameters
  const { content, userPrompt } = req.body;

  // Check if the quote with the given ID exists
  let quote = await Quote.findById(id);

  if (!quote) {
    return res.status(404).json({
      success: false,
      message: "Quote not found",
    });
  }

  // Update quote content
  quote.content = content || quote.content;
  quote.userPrompt = userPrompt || quote.userPrompt;
  quote.updatedAt = new Date();

  // Save the updated quote
  await quote.save();

  res.status(200).json({
    success: true,
    message: "Quote updated successfully",
    data: quote,
  });
});

const deleteQuote = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params; // Get quote ID from request parameters

  try {
    // Check if the quote with the given ID exists
    const quote = await Quote.findById(id);

    if (!quote) {
      return res.status(404).json({
        success: false,
        message: "Quote not found",
      });
    }

    // Delete the quote
    await Quote.deleteOne({ _id: id });

    res.status(200).json({
      success: true,
      message: "Quote deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

const likeQuote = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params; // Get quote ID from request parameters

  try {
    // Check if the quote with the given ID exists
    const quote: any = await Quote.findById(id);

    if (!quote) {
      return res.status(404).json({
        success: false,
        message: "Quote not found",
      });
    }

    // Check if the user has already liked the quote
    const userIndex = quote.likes.indexOf(req.user?._id);
    if (userIndex !== -1) {
      // User has already liked the quote, so unlike it
      quote.likes.splice(userIndex, 1);
      await quote.save();

      res.status(200).json({
        success: true,
        message: "Quote unliked successfully",
      });
    } else {
      // User has not liked the quote, so like it
      quote.likes.push(req.user?._id);
      await quote.save();

      res.status(200).json({
        success: true,
        message: "Quote liked successfully",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

const addToFavorite = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params; // Get quote ID from request parameters

  try {
    // Check if the quote with the given ID exists
    const quote: any = await Quote.findById(id);

    if (!quote) {
      return res.status(404).json({
        success: false,
        message: "Quote not found",
      });
    }

    // Check if the user has already favorited the quote
    if (quote.favorites.includes(req.user?._id)) {
      return res.status(400).json({
        success: false,
        message: "You have already favorited this quote",
      });
    }

    // Add user's ID to the list of favorites
    quote.favorites.push(req.user?._id);
    await quote.save();

    res.status(200).json({
      success: true,
      message: "Quote added to favorites successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

export {
  getQuotes,
  getQuoteById,
  addQuote,
  updateQuote,
  deleteQuote,
  likeQuote,
  addToFavorite
};
