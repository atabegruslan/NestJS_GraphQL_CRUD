import { ObjectType, Field, Int } from '@nestjs/graphql';
import { PrimaryColumn, Column, Entity } from 'typeorm';

@Entity({ name: 'user_settings' })
@ObjectType()
export class UserSetting {
	@PrimaryColumn()
	@Field((type) => Int) // Tells graphql that it's an int type (in the auto generated schema, it defaults to float for number)
	userId: number; // Tells TS that it's number

	@Column({ default: false })
	@Field({defaultValue: false})
	receiveNotifications: boolean;

	@Column({ default: false })
	@Field({defaultValue: false})
	receiveEmails: boolean;
}