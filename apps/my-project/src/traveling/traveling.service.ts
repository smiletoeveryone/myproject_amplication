import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TravelingServiceBase } from "./base/traveling.service.base";

@Injectable()
export class TravelingService extends TravelingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
