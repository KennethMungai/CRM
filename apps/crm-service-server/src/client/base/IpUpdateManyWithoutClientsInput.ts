/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { IpWhereUniqueInput } from "../../ip/base/IpWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class IpUpdateManyWithoutClientsInput {
  @Field(() => [IpWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [IpWhereUniqueInput],
  })
  connect?: Array<IpWhereUniqueInput>;

  @Field(() => [IpWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [IpWhereUniqueInput],
  })
  disconnect?: Array<IpWhereUniqueInput>;

  @Field(() => [IpWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [IpWhereUniqueInput],
  })
  set?: Array<IpWhereUniqueInput>;
}

export { IpUpdateManyWithoutClientsInput as IpUpdateManyWithoutClientsInput };
