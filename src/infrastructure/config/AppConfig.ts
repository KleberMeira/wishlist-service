export const AppConfig = {
    database: {
      uri: process.env.DATABASE_URI || 'mongodb://localhost:27017/wishlist',
    },
    auth: {
      secret: process.env.AUTH_SECRET || 'default_secret',
    },
    limits: {
      wishlistMaxItems: 20,
    },
  };