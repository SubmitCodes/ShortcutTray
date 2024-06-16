import { AppModel } from "../appModel/AppModel";

export type Shortcut = {
  appField?: AppModel | null;
  createdAt: Date;
  description: string | null;
  id: string;
  position: number | null;
  updatedAt: Date;
};
