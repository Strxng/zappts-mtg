import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardModule } from './api/card/card.module';

@Module({
  imports: [
    CardModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mssql',
        host: configService.get('DB_HOST', 'localhost'),
        port: configService.get('DB_PORT', 1433),
        username: configService.get('DB_USERNAME', 'sa'),
        password: configService.get('DB_PASSWORD', '12345#ASDF'),
        database: configService.get('DB_NAME', 'zappts'),
        entities: [`${__dirname}/**/*.entity.{js, ts}`],
        synchronize: true,
        extra: {
          trustServerCertificate: true,
        },
      }),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
