import { Resolver, Query, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { User } from '../models/User';
import { UserSetting } from '../models/UserSetting';
import { mockUsers } from '../__mocks__/mockUsers';
import { mockUserSettings } from '../__mocks__/mockUserSettings';

@Resolver((of) => User)
export class UserResolver {
	@Query(returns => [User])
	getUsers() {
		return mockUsers;
	}

	@Query((returns) => User, {nullable: true})
	getUser(@Args('id', {type: () => Int}) id: number) {
		return mockUsers.find((user) => user.id === id);
	}

	@ResolveField((returns) => UserSetting, {name: 'settings', nullable: true})
	getUserSettings(@Parent() user: User) {
		return mockUserSettings.find((setting) => setting.userId === user.id);
	}
}