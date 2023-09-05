import { SortOrder } from "../../util/SortOrder";

export type TravelingOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  productName?: SortOrder;
  productStock?: SortOrder;
  productType?: SortOrder;
  updatedAt?: SortOrder;
};
