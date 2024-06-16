import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ShortcutListRelationFilter } from "../shortcut/ShortcutListRelationFilter";

export type AppModelWhereInput = {
  description?: StringNullableFilter;
  filePath?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  shortcuts?: ShortcutListRelationFilter;
};
