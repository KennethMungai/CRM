import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { IpModuleBase } from "./base/ip.module.base";
import { IpService } from "./ip.service";
import { IpController } from "./ip.controller";
import { IpResolver } from "./ip.resolver";

@Module({
  imports: [IpModuleBase, forwardRef(() => AuthModule)],
  controllers: [IpController],
  providers: [IpService, IpResolver],
  exports: [IpService],
})
export class IpModule {}
