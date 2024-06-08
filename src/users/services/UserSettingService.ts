import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../models/User';
import { UserSetting } from '../models/UserSetting';
import { CreateUserSettingsInput } from '../utils/CreateUserSettingsInput';
import { UpdateUserSettingsInput } from '../utils/UpdateUserSettingsInput';
import { Repository } from 'typeorm';

@Injectable()
export class UserSettingService {
  constructor(
    @InjectRepository(UserSetting)
    private userSettingsRepository: Repository<UserSetting>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  // getUserSettingById(userId: number) {
  //   return this.userSettingsRepository.findOneBy({ userId });
  // }

  async createUserSettings(createUserSettingsData: CreateUserSettingsInput) {
    const findUser = await this.userRepository.findOneBy({
      id: createUserSettingsData.userId,
    });

    if (!findUser) throw new Error('User Not Found');

    const newUserSetting = this.userSettingsRepository.create(
      createUserSettingsData,
    );
    const savedSettings = await this.userSettingsRepository.save(newUserSetting);

    findUser.settings = savedSettings;
    await this.userRepository.save(findUser);

    return savedSettings;
  }

  async updateUserSettings(userId: number, updateUserSettingsData: UpdateUserSettingsInput) {
    await this.userSettingsRepository.update({ userId }, updateUserSettingsData);
    return this.userSettingsRepository.findOneBy({ userId: userId });
  }

  async deleteUserSettings(userId: number) {
    let userSetting = await this.userSettingsRepository.findOneBy({ userId: userId });
    this.userSettingsRepository.delete({ userId });
    return userSetting;
  }
}
