import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
	@Field((type) => Int) // Tells graphql that it's an int type (in the auto generated schema, it defaults to float for number)
	id: number; // Tells TS that it's number

	@Field()
	username: string;

	@Field({ nullable:true }) // Tells graphql that it's nullable
	displayName?: string; // Tells TS that it's nullable
}