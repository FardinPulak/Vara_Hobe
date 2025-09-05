// src/auth/jwt.strategy.ts
import { Injectable } from '@nestjs/common';
import { AuthGuard, PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET || 'secret',  // Use environment variable for better security
    });
  }

  async validate(payload: any) {
    // Return the user data from the JWT payload
    return { id: payload.id, email: payload.email };
  }
}

export class JwtAuthGuard extends AuthGuard('jwt') {}
