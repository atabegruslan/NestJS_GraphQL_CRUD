import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class UserSetting {
	@Field((type) => Int) // Tells graphql that it's an int type (in the auto generated schema, it defaults to float for number)
	userId: number; // Tells TS that it's number

	@Field({defaultValue: false})
	receiveNotifications: boolean;

	@Field({defaultValue: false})
	receiveEmails: boolean;
}