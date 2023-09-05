import { Traveling as TTraveling } from "../api/traveling/Traveling";

export const TRAVELING_TITLE_FIELD = "productName";

export const TravelingTitle = (record: TTraveling): string => {
  return record.productName || String(record.id);
};
