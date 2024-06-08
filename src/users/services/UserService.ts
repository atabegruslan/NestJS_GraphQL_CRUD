import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../models/User';
import { CreateUserInput } from '../utils/CreateUserInput';
import { UpdateUserInput } from '../utils/UpdateUserInput';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  getUsers() {
    return this.usersRepository.find({ relations: ['settings'] });
  }

  getUserById(id: number) {
    return this.usersRepository.findOne({
      where: { id },
      relations: ['settings'],
    });
  }

  createUser(createUserData: CreateUserInput) {
    const newUser = this.usersRepository.create(createUserData);
    return this.usersRepository.save(newUser);
  }

  async updateUser(id: number, updateUserData: UpdateUserInput) {
    await this.usersRepository.update({ id }, updateUserData);
    return this.usersRepository.findOne({
      where: { id },
      relations: ['settings'],
    });
  }

  async deleteUser(id: number) {
    let user = await this.usersRepository.findOne({
      where: { id },
      relations: ['settings'],
    });
    this.usersRepository.delete({ id });
    return user;
  }
}