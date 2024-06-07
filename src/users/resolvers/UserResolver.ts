import { Resolver, Query, Args, Int, ResolveField, Parent, Mutation } from '@nestjs/graphql';
import { User } from '../models/User';
import { UserSetting } from '../models/UserSetting';
import { CreateUserInput } from '../utils/CreateUserInput';
import { UserService } from '../services/UserService';
import { mockUsers } from '../__mocks__/mockUsers';
import { mockUserSettings } from '../__mocks__/mockUserSettings';

//export let incrementalId = 3;

@Resolver((of) => User)
export class UserResolver {
	constructor(
		private userService: UserService,
		//private userSettingService: UserSettingService,
	) {}

	@Query(returns => [User])
	getUsers() {
		// return mockUsers;
		return this.userService.getUsers();
	}

	@Query((returns) => User, {nullable: true})
	getUser(@Args('id', {type: () => Int}) id: number) {
		// return mockUsers.find((user) => user.id === id);
		return this.userService.getUserById(id);
	}

	// @ResolveField((returns) => UserSetting, {name: 'settings', nullable: true})
	// getUserSettings(@Parent() user: User) {
	// 	// return mockUserSettings.find((setting) => setting.userId === user.id);
	// 	return this.userSettingService.getUserSettingById(user.id);
	// }

	@Mutation((returns) => User)
	createUser(
		@Args('createUserData') createUserData: CreateUserInput
	) {
		// const {username, displayName} = createUserData;
		// const newUser = {username, displayName, id: ++incrementalId};
		// mockUsers.push(newUser);
		// return newUser;
		return this.userService.createUser(createUserData);
	}
}