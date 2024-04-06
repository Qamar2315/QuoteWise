import Joi from 'joi';

interface CommentSchema {
  text: string;
  user: string;
}

const commentSchema = Joi.object<CommentSchema>({
  text: Joi.string().required(),
  user: Joi.string().required()
});

export default commentSchema;
