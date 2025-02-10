import { WishlistItemDto } from '../dtos/WishlistItemDto';

export class WishlistResponseDto {
    userId: string;
    products: WishlistItemDto[];
}