import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IpServiceBase } from "./base/ip.service.base";

@Injectable()
export class IpService extends IpServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
