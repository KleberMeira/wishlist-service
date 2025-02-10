import { IWishlistRepository } from '../../domain/repositories/IWishlistRepository';

export class AddProductToWishlistUseCase {
    constructor(private wishlistRepo: IWishlistRepository) {}
    async execute(userId: string, productId: string): Promise<void> {
      const wishlist = await this.wishlistRepo.getWishlist(userId);
      if (wishlist.length >= 20) throw new Error('Wishlist limit reached');
      await this.wishlistRepo.addProduct(userId, productId);
    }
  }