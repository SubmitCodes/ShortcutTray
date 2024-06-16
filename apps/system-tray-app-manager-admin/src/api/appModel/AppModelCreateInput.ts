import { ShortcutCreateNestedManyWithoutAppModelsInput } from "./ShortcutCreateNestedManyWithoutAppModelsInput";

export type AppModelCreateInput = {
  description?: string | null;
  filePath?: string | null;
  name?: string | null;
  shortcuts?: ShortcutCreateNestedManyWithoutAppModelsInput;
};
