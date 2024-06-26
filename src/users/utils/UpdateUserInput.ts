import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput {
  @Field()
  username: string;

  @Field({ nullable: true })
  displayName?: string;
}
