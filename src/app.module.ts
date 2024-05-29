import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DevicesModule } from './devices/devices.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [DevicesModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
