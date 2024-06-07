import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UserSetting } from '../models/UserSetting';
import { CreateUserSettingsInput } from '../utils/CreateUserSettingsInput';
import { mockUserSettings } from '../__mocks__/mockUserSettings';

@Resolver()
export class UserSettingsResolver {
  @Mutation((returns) => UserSetting)
  createUserSettings(
    @Args('createUserSettingsData') createUserSettingsData: CreateUserSettingsInput,
  ) {
    mockUserSettings.push(createUserSettingsData);
    return createUserSettingsData;
  }
}
