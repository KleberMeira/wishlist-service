import { RemoveProductFromWishlistUseCase } from '../../../application/use-cases/RemoveProductFromWishlistUseCase';
import { IWishlistRepository } from '../../../domain/repositories/IWishlistRepository';

describe('RemoveProductFromWishlistUseCase', () => {
  let useCase: RemoveProductFromWishlistUseCase;
  let wishlistRepo: jest.Mocked<IWishlistRepository>;

  beforeEach(() => {
    wishlistRepo = {
      removeProduct: jest.fn(),
    } as any;
    useCase = new RemoveProductFromWishlistUseCase(wishlistRepo);
  });

  it('deve remover um produto da wishlist', async () => {
    const userId = '123';
    const productId = '456';

    wishlistRepo.removeProduct.mockResolvedValue(undefined);

    await expect(useCase.execute(userId, productId)).resolves.toBeUndefined();
    expect(wishlistRepo.removeProduct).toHaveBeenCalledWith(userId, productId);
  });
});
