import { buildSchemaSync } from 'type-graphql';
import { WishlistResolver } from '../resolvers/WishlistResolver';

export const WishlistSchema = buildSchemaSync({
  resolvers: [WishlistResolver],
  emitSchemaFile: true
});