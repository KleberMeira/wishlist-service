import { AddProductToWishlistUseCase } from '../../../application/use-cases/AddProductToWishlistUseCase';
import { IWishlistRepository } from '../../../domain/repositories/IWishlistRepository';

describe('AddProductToWishlistUseCase', () => {
  let useCase: AddProductToWishlistUseCase;
  let wishlistRepo: jest.Mocked<IWishlistRepository>;

  beforeEach(() => {
    wishlistRepo = {
      addProduct: jest.fn(),
      getWishlist: jest.fn(),
    } as any;
    useCase = new AddProductToWishlistUseCase(wishlistRepo);
  });

  it('deve adicionar um produto na wishlist', async () => {
    const userId = '123';
    const productId = '456';

    wishlistRepo.getWishlist.mockResolvedValue([]);
    wishlistRepo.addProduct.mockResolvedValue(undefined);

    await expect(useCase.execute(userId, productId)).resolves.toBeUndefined();
    expect(wishlistRepo.addProduct).toHaveBeenCalledWith(userId, productId);
  });

  it('deve lançar erro se a wishlist já tiver 20 itens', async () => {
    const userId = '123';
    const productId = '456';
    const wishlistMock = new Array(20).fill('some-product-id');

    wishlistRepo.getWishlist.mockResolvedValue(wishlistMock);

    await expect(useCase.execute(userId, productId)).rejects.toThrow(
      'Wishlist limit reached'
    );
  });
});
