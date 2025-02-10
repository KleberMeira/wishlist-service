import { AppConfig } from '../../../infrastructure/config/AppConfig';

describe('AppConfig', () => {
  it('deve ter a configuração do banco de dados definida', () => {
    expect(AppConfig.database.uri).toBeDefined();
  });

  it('deve ter a configuração de autenticação definida', () => {
    expect(AppConfig.auth.secret).toBeDefined();
  });

  it('deve ter um limite de itens na wishlist', () => {
    expect(AppConfig.limits.wishlistMaxItems).toBeDefined();
  });
});
