import { IWishlistRepository } from '../../domain/repositories/IWishlistRepository';

export class GetWishlistUseCase {
    constructor(private wishlistRepo: IWishlistRepository) {}
    async execute(userId: string): Promise<string[]> {
      return await this.wishlistRepo.getWishlist(userId);
    }
  }