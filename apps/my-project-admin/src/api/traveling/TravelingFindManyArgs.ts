import { TravelingWhereInput } from "./TravelingWhereInput";
import { TravelingOrderByInput } from "./TravelingOrderByInput";

export type TravelingFindManyArgs = {
  where?: TravelingWhereInput;
  orderBy?: Array<TravelingOrderByInput>;
  skip?: number;
  take?: number;
};
