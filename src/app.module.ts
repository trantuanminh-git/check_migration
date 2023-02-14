import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'db/ormconfig';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
