import { HydratedDocument, Schema, Types } from 'mongoose';

export interface IUser {
  walletAddress: string;
  username: string;
}

export const modelName = 'User';

export type UserDocument = HydratedDocument<IUser>;

export const UserSchema = new Schema<IUser>(
  {
    // gaming marketplace related schema
    walletAddress: { type: String, unique: true, required: true },
    username: { type: String, required: true },
  },

  { timestamps: true },
);
