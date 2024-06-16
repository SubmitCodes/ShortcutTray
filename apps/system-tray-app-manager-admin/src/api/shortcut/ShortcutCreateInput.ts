import { AppModelWhereUniqueInput } from "../appModel/AppModelWhereUniqueInput";

export type ShortcutCreateInput = {
  appField?: AppModelWhereUniqueInput | null;
  description?: string | null;
  position?: number | null;
};
