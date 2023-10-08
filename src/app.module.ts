import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Invoice } from './invoice/entities/invoice.entity';
import { InvoiceController } from './invoice/invoice.controller';
import { InvoiceModule } from './invoice/invoice.module';
import { InvoiceService } from './invoice/invoice.service';

@Module({
  imports: [
    InvoiceModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [Invoice],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController, InvoiceController],
  providers: [AppService, InvoiceService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
