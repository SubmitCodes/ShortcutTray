import { Shortcut } from "../shortcut/Shortcut";

export type AppModel = {
  createdAt: Date;
  description: string | null;
  filePath: string | null;
  id: string;
  name: string | null;
  shortcuts?: Array<Shortcut>;
  updatedAt: Date;
};
