import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UploaderModule } from './uploader/uploader.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [ProductModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'playgroup_db',
    entities: [__dirname+"/**/*.entity{.ts,.js}"],
    synchronize: true,
  }), UploaderModule, MulterModule.register({
    dest: "./uploads"
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
