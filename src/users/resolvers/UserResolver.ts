import { Resolver, Query, Args, Int, ResolveField, Parent, Mutation } from '@nestjs/graphql';
import { User } from '../models/User';
import { UserSetting } from '../models/UserSetting';
import { CreateUserInput } from '../utils/CreateUserInput';
import { UpdateUserInput } from '../utils/UpdateUserInput';
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
		// A lazier way would be: @Args('createUserData') createUserData: any
		// Without using InputTypes: 
			// @Args('username') username: string
			// @Args('displayName', {nullable:true}) displayName: string
		@Args('createUserData') createUserData: CreateUserInput
	) {
		// const {username, displayName} = createUserData;
		// const newUser = {username, displayName, id: ++incrementalId};
		// mockUsers.push(newUser);
		// return newUser;
		return this.userService.createUser(createUserData);
	}

	@Mutation((returns) => User, {nullable: true})
	async updateUser(
		@Args('id', {type: () => Int}) id: number,
		@Args('updateUserData') updateUserData: UpdateUserInput
	) {
		return await this.userService.updateUser(id, updateUserData);
	}

	@Mutation((returns) => User, {nullable: true})
	async deleteUser(@Args('id', {type: () => Int}) id: number) {
		return await this.userService.deleteUser(id);
	}
}