import { Module } from '@nestjs/common';
import { WishlistController } from './interface/controllers/WishlistController';
import { WishlistRepository } from './infrastructure/database/repositories/IWishlistRepository';
import { AddProductToWishlistUseCase } from './application/use-cases/AddProductToWishlistUseCase';
import { RemoveProductFromWishlistUseCase } from './application/use-cases/RemoveProductFromWishlistUseCase';
import { GetWishlistUseCase } from './application/use-cases/GetWishlistUseCase';
import { IsProductInWishlistUseCase } from './application/use-cases/IsProductInWishlistUseCase';
import { DatabaseModule } from './infrastructure/config/DatabaseModule';

@Module({
  imports: [DatabaseModule],
  controllers: [WishlistController],
  providers: [
    WishlistRepository,
    { provide: 'IWishlistRepository', useClass: WishlistRepository },
    AddProductToWishlistUseCase,
    RemoveProductFromWishlistUseCase,
    GetWishlistUseCase,
    IsProductInWishlistUseCase
  ]
})
export class AppModule {}