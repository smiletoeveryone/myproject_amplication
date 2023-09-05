import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TravelingService } from "./traveling.service";
import { TravelingControllerBase } from "./base/traveling.controller.base";

@swagger.ApiTags("travelings")
@common.Controller("travelings")
export class TravelingController extends TravelingControllerBase {
  constructor(
    protected readonly service: TravelingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
