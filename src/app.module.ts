import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  providers: [AppService],
  controllers: [AppController],
  imports: [
    TypeOrmModule.forRoot({
      port: 3306,
      type: 'mysql',
      entities: [],
      database: 'todo',
      synchronize: true,
      host: 'localhost',
      username: 'root',
      password: 'password',
    }),
  ],
})
export class AppModule {}
