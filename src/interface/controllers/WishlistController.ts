import { Controller, Post, Delete, Get, Param, Body } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AddProductDto } from '../dtos/AddProductDto';
import { RemoveProductDto } from '../dtos/RemoveProductDto';
import { GetWishlistDto } from '../dtos/GetWishlistDto';
import { IsProductInWishlistDto } from '../dtos/IsProductInWishlistDto';

@ApiTags('Wishlist')
@ApiBearerAuth()
@Controller('wishlist')
export class WishlistController {
  @Post('add')
  @ApiOperation({ summary: 'Adicionar um produto à Wishlist' })
  @ApiResponse({ status: 201, description: 'Produto adicionado com sucesso' })
  addProduct(@Body() addProductDto: AddProductDto) {
    return { message: 'Produto adicionado' };
  }

  @Delete('remove')
  @ApiOperation({ summary: 'Remover um produto da Wishlist' })
  @ApiResponse({ status: 200, description: 'Produto removido com sucesso' })
  removeProduct(@Body() removeProductDto: RemoveProductDto) {
    return { message: 'Produto removido' };
  }

  @Get(':userId')
  @ApiOperation({ summary: 'Obter a Wishlist de um usuário' })
  @ApiResponse({ status: 200, description: 'Wishlist retornada com sucesso' })
  getWishlist(@Param() params: GetWishlistDto) {
    return { message: `Wishlist do usuário ${params.userId}` };
  }

  @Get(':userId/product/:productId')
  @ApiOperation({ summary: 'Verificar se um produto está na Wishlist' })
  @ApiResponse({ status: 200, description: 'Verificação realizada com sucesso' })
  isProductInWishlist(@Param() params: IsProductInWishlistDto) {
    return { message: `Produto ${params.productId} está na wishlist do usuário ${params.userId}` };
  }
}
