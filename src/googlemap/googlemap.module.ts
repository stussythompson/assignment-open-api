import { Module } from '@nestjs/common';
import { GooglemapService } from './googlemap.service';
import { GooglemapController } from './googlemap.controller';

@Module({
  providers: [GooglemapService],
  controllers: [GooglemapController]
})
export class GooglemapModule {}
