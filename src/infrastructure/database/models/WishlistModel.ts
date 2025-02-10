import { Schema, model } from 'mongoose';

const WishlistSchema = new Schema({
  userId: { type: String, required: true, unique: true },
  products: { type: [String], default: [] }
});

export const WishlistModel = model('Wishlist', WishlistSchema);