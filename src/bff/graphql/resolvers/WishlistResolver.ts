import { Resolver, Query, Mutation, Arg, Ctx } from 'type-graphql';
import { AddProductToWishlistUseCase } from '../../../application/use-cases/AddProductToWishlistUseCase';
import { RemoveProductFromWishlistUseCase } from '../../../application/use-cases/RemoveProductFromWishlistUseCase';
import { GetWishlistUseCase } from '../../../application/use-cases/GetWishlistUseCase';
import { IsProductInWishlistUseCase } from '../../../application/use-cases/IsProductInWishlistUseCase';
@Resolver()
export class WishlistResolver {
  constructor(
    private addProductUseCase: AddProductToWishlistUseCase,
    private removeProductUseCase: RemoveProductFromWishlistUseCase,
    private getWishlistUseCase: GetWishlistUseCase,
    private isProductInWishlistUseCase: IsProductInWishlistUseCase
  ) {}

  @Mutation(() => Boolean)
  async addProductToWishlist(@Arg('productId') productId: string, @Ctx() ctx: any) {
    const userId = ctx.req.user.id;
    await this.addProductUseCase.execute(userId, productId);
    return true;
  }

  @Mutation(() => Boolean)
  async removeProductFromWishlist(@Arg('productId') productId: string, @Ctx() ctx: any) {
    const userId = ctx.req.user.id;
    await this.removeProductUseCase.execute(userId, productId);
    return true;
  }

  @Query(() => [String])
  async getWishlist(@Ctx() ctx: any) {
    const userId = ctx.req.user.id;
    return await this.getWishlistUseCase.execute(userId);
  }

  @Query(() => Boolean)
  async isProductInWishlist(@Arg('productId') productId: string, @Ctx() ctx: any) {
    const userId = ctx.req.user.id;
    return await this.isProductInWishlistUseCase.execute(userId, productId);
  }
}