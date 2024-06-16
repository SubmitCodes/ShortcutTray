/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ShortcutWhereInput } from "./ShortcutWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ShortcutListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ShortcutWhereInput,
  })
  @ValidateNested()
  @Type(() => ShortcutWhereInput)
  @IsOptional()
  @Field(() => ShortcutWhereInput, {
    nullable: true,
  })
  every?: ShortcutWhereInput;

  @ApiProperty({
    required: false,
    type: () => ShortcutWhereInput,
  })
  @ValidateNested()
  @Type(() => ShortcutWhereInput)
  @IsOptional()
  @Field(() => ShortcutWhereInput, {
    nullable: true,
  })
  some?: ShortcutWhereInput;

  @ApiProperty({
    required: false,
    type: () => ShortcutWhereInput,
  })
  @ValidateNested()
  @Type(() => ShortcutWhereInput)
  @IsOptional()
  @Field(() => ShortcutWhereInput, {
    nullable: true,
  })
  none?: ShortcutWhereInput;
}
export { ShortcutListRelationFilter as ShortcutListRelationFilter };
