import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UserSetting } from '../models/UserSetting';
import { UserSettingService } from '../services/UserSettingService';
import { CreateUserSettingsInput } from '../utils/CreateUserSettingsInput';
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
}
