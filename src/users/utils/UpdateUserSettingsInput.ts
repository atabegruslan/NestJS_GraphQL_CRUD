import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateUserSettingsInput {
  @Field({ nullable: true, defaultValue: false })
  receiveNotifications: boolean;

  @Field({ nullable: true, defaultValue: false })
  receiveEmails: boolean;
}
