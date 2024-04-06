
import Joi from 'joi';

interface UserSchema {
  name: string;
  email: string;
  password: string;
}

const userSchema = Joi.object<UserSchema>({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

export default userSchema;