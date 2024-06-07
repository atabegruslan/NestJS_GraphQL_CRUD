import { Module } from '@nestjs/common';
import { UserResolver } from './resolvers/UserResolver';

@Module({
  imports: [],
  providers: [UserResolver],
})
export class UsersModule {}