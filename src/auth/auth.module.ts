import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PlayersModule } from '../players/players.module';

@Module({
    imports: [PlayersModule],
    providers: [AuthService],
    controllers: [AuthController],
})
export class AuthModule {}
