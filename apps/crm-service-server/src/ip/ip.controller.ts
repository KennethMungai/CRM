import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { IpService } from "./ip.service";
import { IpControllerBase } from "./base/ip.controller.base";

@swagger.ApiTags("ips")
@common.Controller("ips")
export class IpController extends IpControllerBase {
  constructor(
    protected readonly service: IpService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
