import { GetWishlistUseCase } from '../../../application/use-cases/GetWishlistUseCase';
import { IWishlistRepository } from '../../../domain/repositories/IWishlistRepository';

describe('GetWishlistUseCase', () => {
  let useCase: GetWishlistUseCase;
  let wishlistRepo: jest.Mocked<IWishlistRepository>;

  beforeEach(() => {
    wishlistRepo = {
      getWishlist: jest.fn(),
    } as any;
    useCase = new GetWishlistUseCase(wishlistRepo);
  });

  it('deve retornar a wishlist do usuário', async () => {
    const userId = '123';
    const wishlistMock = new Array(5).fill('some-product-id');
    wishlistRepo.getWishlist.mockResolvedValue(wishlistMock);

    const result = await useCase.execute(userId);
    expect(result).toEqual(wishlistMock);
    expect(wishlistRepo.getWishlist).toHaveBeenCalledWith(userId);
  });
});
