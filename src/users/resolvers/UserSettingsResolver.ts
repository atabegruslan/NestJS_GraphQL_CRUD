import { Resolver, Mutation, Args, Int } from '@nestjs/graphql';
import { UserSetting } from '../models/UserSetting';
import { UserSettingService } from '../services/UserSettingService';
import { CreateUserSettingsInput } from '../utils/CreateUserSettingsInput';
import { UpdateUserSettingsInput } from '../utils/UpdateUserSettingsInput';
import { mockUserSettings } from '../__mocks__/mockUserSettings';

@Resolver()
export class UserSettingsResolver {
  constructor(private userSettingsService: UserSettingService) {}

  @Mutation((returns) => UserSetting)
  async createUserSettings(
    @Args('createUserSettingsData') createUserSettingsData: CreateUserSettingsInput,
  ) {
    // mockUserSettings.push(createUserSettingsData);
    // return createUserSettingsData;
    const userSetting = await this.userSettingsService.createUserSettings(
      createUserSettingsData,
    );
    return userSetting;
  }

  @Mutation((returns) => UserSetting)
  async updateUserSettings(
    @Args('userId', {type: () => Int}) userId: number,
    @Args('updateUserSettingsData') updateUserSettingsData: UpdateUserSettingsInput,
  ) {
    return await this.userSettingsService.updateUserSettings(userId, updateUserSettingsData);
  }

  @Mutation((returns) => UserSetting, {nullable: true})
  async deleteUserSettings(@Args('userId', {type: () => Int}) userId: number) {
    return await this.userSettingsService.deleteUserSettings(userId);
  }
}
