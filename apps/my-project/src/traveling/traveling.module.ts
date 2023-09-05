import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TravelingModuleBase } from "./base/traveling.module.base";
import { TravelingService } from "./traveling.service";
import { TravelingController } from "./traveling.controller";
import { TravelingResolver } from "./traveling.resolver";

@Module({
  imports: [TravelingModuleBase, forwardRef(() => AuthModule)],
  controllers: [TravelingController],
  providers: [TravelingService, TravelingResolver],
  exports: [TravelingService],
})
export class TravelingModule {}
