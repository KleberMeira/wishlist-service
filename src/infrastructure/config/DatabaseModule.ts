import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppConfig } from './AppConfig';

@Module({
  imports: [MongooseModule.forRoot(AppConfig.database.uri)],
  exports: [MongooseModule],
})
export class DatabaseModule {}