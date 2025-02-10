import { IsProductInWishlistUseCase } from '../../../application/use-cases/IsProductInWishlistUseCase';
import { IWishlistRepository } from '../../../domain/repositories/IWishlistRepository';

describe('IsProductInWishlistUseCase', () => {
  let useCase: IsProductInWishlistUseCase;
  let wishlistRepo: jest.Mocked<IWishlistRepository>;

  beforeEach(() => {
    wishlistRepo = {
      isProductInWishlist: jest.fn(),
    } as any;
    useCase = new IsProductInWishlistUseCase(wishlistRepo);
  });

  it('deve retornar true se o produto estiver na wishlist', async () => {
    const userId = '123';
    const productId = '456';

    wishlistRepo.isProductInWishlist.mockResolvedValue(true);

    await expect(useCase.execute(userId, productId)).resolves.toBe(true);
  });

  it('deve retornar false se o produto não estiver na wishlist', async () => {
    const userId = '123';
    const productId = '456';

    wishlistRepo.isProductInWishlist.mockResolvedValue(false);

    await expect(useCase.execute(userId, productId)).resolves.toBe(false);
  });
});
