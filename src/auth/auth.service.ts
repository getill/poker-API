import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PlayersService } from '../players/players.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private playersService: PlayersService,
        private jwtService: JwtService
    ) {}

    async signIn(
        playername: string,
        pass: string,
    ): Promise<{ access_token: string }> {
        const player = await this.playersService.findOne(playername);
        if (player?.password !== pass) {
            throw new UnauthorizedException();
        }
        const payload = { sub: player.playerId, playername: player.playername };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}
