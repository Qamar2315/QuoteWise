// express.d.ts

import { UserModel } from './models/User'; // Update the import path based on your actual User model

declare module 'express' {
  export interface Request {
    user?: UserModel; // Add your custom properties here
  }
}
