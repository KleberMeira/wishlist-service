import { IWishlistRepository } from '../../domain/repositories/IWishlistRepository';

export class RemoveProductFromWishlistUseCase {
  constructor(private wishlistRepo: IWishlistRepository) {}
  async execute(userId: string, productId: string): Promise<void> {
    await this.wishlistRepo.removeProduct(userId, productId);
  }
}