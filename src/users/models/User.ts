import { ObjectType, Field, Int } from '@nestjs/graphql';
import { UserSetting } from './UserSetting';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'users' })
@ObjectType()
export class User {
	@PrimaryGeneratedColumn()
	@Field((type) => Int) // Tells graphql that it's an int type (in the auto generated schema, it defaults to float for number)
	id: number; // Tells TS that it's number

	@Column()
	@Field()
	username: string;

	@Column({ nullable:true })
	@Field({ nullable:true }) // Tells graphql that it's nullable
	displayName?: string; // Tells TS that it's nullable

	@OneToOne(() => UserSetting)
	@JoinColumn()
	@Field({ nullable:true })
	settings?: UserSetting;
}