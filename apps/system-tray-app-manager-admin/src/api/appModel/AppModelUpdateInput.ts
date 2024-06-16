import { ShortcutUpdateManyWithoutAppModelsInput } from "./ShortcutUpdateManyWithoutAppModelsInput";

export type AppModelUpdateInput = {
  description?: string | null;
  filePath?: string | null;
  name?: string | null;
  shortcuts?: ShortcutUpdateManyWithoutAppModelsInput;
};
