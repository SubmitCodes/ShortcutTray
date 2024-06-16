/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  AppModel as PrismaAppModel,
  Shortcut as PrismaShortcut,
} from "@prisma/client";

export class AppModelServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.AppModelCountArgs, "select">): Promise<number> {
    return this.prisma.appModel.count(args);
  }

  async appModels<T extends Prisma.AppModelFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AppModelFindManyArgs>
  ): Promise<PrismaAppModel[]> {
    return this.prisma.appModel.findMany<Prisma.AppModelFindManyArgs>(args);
  }
  async appModel<T extends Prisma.AppModelFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AppModelFindUniqueArgs>
  ): Promise<PrismaAppModel | null> {
    return this.prisma.appModel.findUnique(args);
  }
  async createAppModel<T extends Prisma.AppModelCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AppModelCreateArgs>
  ): Promise<PrismaAppModel> {
    return this.prisma.appModel.create<T>(args);
  }
  async updateAppModel<T extends Prisma.AppModelUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AppModelUpdateArgs>
  ): Promise<PrismaAppModel> {
    return this.prisma.appModel.update<T>(args);
  }
  async deleteAppModel<T extends Prisma.AppModelDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AppModelDeleteArgs>
  ): Promise<PrismaAppModel> {
    return this.prisma.appModel.delete(args);
  }

  async findShortcuts(
    parentId: string,
    args: Prisma.ShortcutFindManyArgs
  ): Promise<PrismaShortcut[]> {
    return this.prisma.appModel
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .shortcuts(args);
  }
}
