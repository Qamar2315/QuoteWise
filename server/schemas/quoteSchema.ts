import Joi from 'joi';

interface QuoteSchema {
  text: string;
  author: string;
  userPrompt: string;
}

const quoteSchema = Joi.object<QuoteSchema>({
  text: Joi.string().required(),
  author: Joi.string().required(),
  userPrompt: Joi.string().required()
});

export default quoteSchema;
