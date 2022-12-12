import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';

import config from './config';

@Injectable()
export class AppService {
  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) { }
  getHello(): string {
    const apiKey = this.configService.aplication.version;
    const name = this.configService.aplication.name;
    return `Hello welcome to ${name} and the project version is ${apiKey} `;
  }
}
