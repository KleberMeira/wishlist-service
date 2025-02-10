import { IWishlistRepository } from '../../domain/repositories/IWishlistRepository';

export class IsProductInWishlistUseCase {
    constructor(private wishlistRepo: IWishlistRepository) {}
    async execute(userId: string, productId: string): Promise<boolean> {
      return await this.wishlistRepo.isProductInWishlist(userId, productId);
    }
  }