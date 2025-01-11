import { Test, TestingModule } from '@nestjs/testing';
import { GooglemapService } from './googlemap.service';

describe('GooglemapService', () => {
  let service: GooglemapService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GooglemapService],
    }).compile();

    service = module.get<GooglemapService>(GooglemapService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
