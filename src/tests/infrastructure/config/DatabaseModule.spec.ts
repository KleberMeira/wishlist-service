import { Test } from '@nestjs/testing';
import { DatabaseModule } from '../../../infrastructure/config/DatabaseModule';

describe('DatabaseModule', () => {
  it('deve configurar o módulo corretamente', async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [DatabaseModule],
    }).compile();

    expect(moduleRef).toBeDefined();
  });
});
