import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VmModuleBase } from "./base/vm.module.base";
import { VmService } from "./vm.service";
import { VmController } from "./vm.controller";
import { VmResolver } from "./vm.resolver";

@Module({
  imports: [VmModuleBase, forwardRef(() => AuthModule)],
  controllers: [VmController],
  providers: [VmService, VmResolver],
  exports: [VmService],
})
export class VmModule {}
