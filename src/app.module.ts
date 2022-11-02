import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from 'entities';
import { MulterModule } from '@nestjs/platform-express';
import { getEnvPath } from './common/helper/env.helper';
import { TypeOrmConfigService } from './shared/typeorm/typeorm.service';


const envFilePath: string = getEnvPath(`dist/common/envs`);

@Module({
  imports: [ConfigModule.forRoot({ envFilePath, isGlobal: true }),
  TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }), TypeOrmModule.forFeature(entities), MulterModule.register({
    dest: './uploads/article-img',
  })],
  
})
export class AppModule { }
