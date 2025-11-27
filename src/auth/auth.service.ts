import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PlayersService } from '../players/players.service';

@Injectable()
export class AuthService {
    constructor(private playersService: PlayersService) {}

    async signIn(playername: string, pass: string): Promise<any> {
        const player = await this.playersService.findOne(playername);
        if (player?.password !== pass) {
            throw new UnauthorizedException();
        }
        const { password, ...result } = player;
        // TODO: Generate a JWT and return it here
        // instead of the user object
        return result;
    }
}
