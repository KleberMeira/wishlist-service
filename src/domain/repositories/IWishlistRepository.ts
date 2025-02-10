export interface IWishlistRepository {
    addProduct(userId: string, productId: string): Promise<void>;
    removeProduct(userId: string, productId: string): Promise<void>;
    getWishlist(userId: string): Promise<string[]>;
    isProductInWishlist(userId: string, productId: string): Promise<boolean>;
  }