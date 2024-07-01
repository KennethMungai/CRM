import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { VmService } from "./vm.service";
import { VmControllerBase } from "./base/vm.controller.base";

@swagger.ApiTags("vms")
@common.Controller("vms")
export class VmController extends VmControllerBase {
  constructor(
    protected readonly service: VmService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
