import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayersController } from './players/players.controller';
import { TablesController } from './tables/tables.controller';
import { TablesService } from './tables/tables.service';
import { PlayersService } from './players/players.service';
import { AuthModule } from './auth/auth.module';
import { PlayersModule } from './players/players.module';

@Module({
  imports: [AuthModule, PlayersModule],
  controllers: [AppController, PlayersController, TablesController],
  providers: [AppService, TablesService, PlayersService],
})
export class AppModule {}
