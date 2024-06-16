import { AppModelWhereUniqueInput } from "../appModel/AppModelWhereUniqueInput";

export type ShortcutUpdateInput = {
  appField?: AppModelWhereUniqueInput | null;
  description?: string | null;
  position?: number | null;
};
