import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import { CrudConfigService } from '@nestjsx/crud';
import { crudGlobalOptions } from './common/helper/crud.helper';
import helmet from 'helmet';
CrudConfigService.load(crudGlobalOptions);

import { AppModule } from './app.module';



async function bootstrap() {
  const app: NestExpressApplication = await NestFactory.create(AppModule,{cors:true});
  const config: ConfigService = app.get(ConfigService);
  const port: number = config.get<number>('PORT') || 3002;
  app.use(helmet());
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  await app.listen(port, () => {
    console.log('[WEB]', config.get<string>('BASE_URL'));
  });
}
bootstrap();
