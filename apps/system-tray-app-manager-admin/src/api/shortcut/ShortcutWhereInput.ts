import { AppModelWhereUniqueInput } from "../appModel/AppModelWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ShortcutWhereInput = {
  appField?: AppModelWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  position?: IntNullableFilter;
};
