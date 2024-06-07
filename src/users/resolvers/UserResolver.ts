import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { User } from '../models/User';
import { mockUsers } from '../__mocks__/mockUsers';

@Resolver()
export class UserResolver {
	@Query(returns => [User])
	getUsers() {
		return mockUsers;
	}

	@Query((returns) => User, {nullable: true})
	getUser(@Args('id', {type: () => Int}) id: number) {
		return mockUsers.find((user) => user.id === id);
	}
}