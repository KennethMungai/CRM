import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VmServiceBase } from "./base/vm.service.base";

@Injectable()
export class VmService extends VmServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
