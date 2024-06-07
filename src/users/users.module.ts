import { Module } from '@nestjs/common';
import { User } from './models/User';
import { UserSetting } from './models/UserSetting';
import { UserResolver } from './resolvers/UserResolver';
import { UserSettingsResolver } from './resolvers/UserSettingsResolver';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserSetting])],
  providers: [UserResolver, UserSettingsResolver],
})
export class UsersModule {}