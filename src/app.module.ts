import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GooglemapModule } from './googlemap/googlemap.module';

@Module({
  imports: [GooglemapModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
