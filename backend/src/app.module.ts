import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { pgConfig } from 'dbConfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { MyPropertyService } from './my-property/my-property.service';
import { MyPropertyModule } from './my-property/my-property.module';
import { DashboardController } from './dashboard/dashboard.controller';
import { DashboardService } from './dashboard/dashboard.service';
import { DashboardModule } from './dashboard/dashboard.module';
@Module({
  imports: [TypeOrmModule.forRoot(pgConfig),  UserModule, DashboardModule, MyPropertyModule],
  controllers: [AppController, DashboardController],
  providers: [AppService,  DashboardService, MyPropertyService],
  
})
export class AppModule {}