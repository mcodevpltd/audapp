import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import * as path from 'path';
import * as sharp from 'sharp';
import { Express } from 'express';
@Injectable()
export class SharpPipe implements PipeTransform<Express.Multer.File, Promise<any>> {

  async transform(image: Express.Multer.File): Promise<any> {
    console.log(image);

    if (image === undefined) {
      throw new BadRequestException('Invalid Image')
    }

    const originalName = path.parse(image.originalname).name;
    const filename = Date.now() + '-' + originalName + '.webp';

    await sharp(image.buffer)
      .resize(800)
      .webp({ effort: 3 })
      .toFile(path.join('./uploads', filename));

    return {
      originalname: image.originalname,
      filename: filename,
      mimetype: image.mimetype,
      size: image.size
    };
  }

}