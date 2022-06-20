import { Schema, model } from "mongoose";

interface IUser {
  googleId: string;
  googleToken?: {
    access_token: string;
    refresh_token: string;
    token_type: string;
    expiry_date: number;
  };
  slug: string;
  createdAt: Date;
  email: string;
  isAdmin?: boolean;
  displayName?: string;
  avatarUrl?: string;
}

const userSchema = new Schema<IUser>({
  googleId: {
    type: String,
    required: true,
    unique: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  googleToken: {
    access_token: String,
    refresh_token: String,
    token_type: String,
    expiry_date: Number,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  displayName: String,
  avatarUrl: String,
});

const User = model<IUser>("User", userSchema);

export default User;
