import { Module } from '@nestjs/common';
import { UserResolver } from './resolvers/UserResolver';
import { UserSettingsResolver } from './resolvers/UserSettingsResolver';

@Module({
  imports: [],
  providers: [UserResolver, UserSettingsResolver],
})
export class UsersModule {}