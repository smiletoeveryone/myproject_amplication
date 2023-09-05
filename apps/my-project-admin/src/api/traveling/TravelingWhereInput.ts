import { StringFilter } from "../../util/StringFilter";

export type TravelingWhereInput = {
  id?: StringFilter;
  productName?: StringFilter;
  productStock?: StringFilter;
  productType?: StringFilter;
};
