import { IWishlistRepository } from '../../../domain/repositories/IWishlistRepository';
import { WishlistModel } from '../models/WishlistModel';
export class WishlistRepository implements IWishlistRepository {
  async addProduct(userId: string, productId: string): Promise<void> {
    await WishlistModel.updateOne(
      { userId },
      { $addToSet: { products: productId } },
      { upsert: true }
    );
  }
  async removeProduct(userId: string, productId: string): Promise<void> {
    await WishlistModel.updateOne(
      { userId },
      { $pull: { products: productId } }
    );
  }
  async getWishlist(userId: string): Promise<string[]> {
    const wishlist = await WishlistModel.findOne({ userId });
    return wishlist ? wishlist.products : [];
  }
  async isProductInWishlist(userId: string, productId: string): Promise<boolean> {
    const wishlist = await WishlistModel.findOne({ userId, products: productId });
    return !!wishlist;
  }
}
